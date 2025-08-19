// 08.13
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// 서버 사이드 + 데이터 패칭(0814)
export async function getServerSideProps({req}) {
  console.log("쿠키 : ", req.headers.cookie)

  // 헤더 안에 쿠키가 있다면 정보를 저장, 만약 없다면 빈 공간으로 저장
  const cookie = req.headers.cookie || "";
  // 헤더 문자 안에 쿠키 이름이 포함되어있는지 확인
  const isAdmin = cookie.includes("authToken=admin_token");

  // 토큰 값이 없다면 로그인 하는 페이지로 이동. 있으면 다음 코드를 실행(서버 호출해서 데이터 패칭)
  if(!isAdmin) {
    
    return {
      redirect: {
        destination: "/admin/login", // 이동하는 URL 경고
        permanent: false, // 307(임시 리다이렉트) - 캐싱 안함
      }
    };
    
  }

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/"

  try {
    // 관리자로 로그인이 되었다면 서버 route 호출해서 데이터 가져오기
    /* 
      getServerSideProps - SSR, 서버 측에서 동작을 함.
      Node 환경에서는 어디로 요청을 해야할지 host 정보가 없어서 절대 경로가 필요
      (TypeError: Invalid URL)
     */
    const {data} = await axios.get("/api/admin/orders", {
      baseURL,
      headers: {cookie} // 쿠키를 api로 전달(서버 사이드 인증)
    });

    // 정상적으로 실행됐을 때 return
    return {props: {initalOrders : data}}
  } catch(err) {
    // 인증 실패시 로그인으로 돌려보내기
    console.log(err)
    if(err.response?.status === 401)  {

      return {
        redirect: {
          destination: "/admin/login", // 이동하는 URL 경고
          permanent: false, // 307(임시 리다이렉트) - 캐싱 안함
        }
      };

    }

    // 401이 아니라 다른 에러들은 404
    return {notFound: true};
  }

}


// 주문목록 조회 페이지
export default function OrderAdminPage({initalOrders = []}) {
  const router = useRouter();

  const [orders, setOrders] = useState(initalOrders);
  console.log("props", orders)

  const statusOptions = ["배송 준비", "배송 중", "배송 완료"];

  /* 
    배송 상태 변경시 처리하는 이벤트 함수
    아이디와 새로 변경된 상태를 가지고 처리하는 서버로 보냄
  */
  const handleStatusChange = async(id, newStatus) => {
    console.log(id, newStatus);

    const {data} = await axios.patch("/api/admin/orders", {id, status: newStatus});

    console.log(data);

    alert(`${data.message} : ${data.order.id} - ${data.order.status}`)

    await axiosOrders();
  };

  // 주문 목록 조회
  const axiosOrders = async () => {
    try {
      const res = await axios.get("/api/admin/orders");
      console.log(res.data);
      setOrders(res.data);
    } catch (err) {
      console.err(err);
      alert("주문 목록을 불러오지 못했습니다.");
    }
  };

  // useEffect(() => {
  //   axiosOrders();
  // }, []);

  return (
    <div className="p-8">
      <Link href="/admin" className="text-sm text-blue-600 underline">
        돌아가기
      </Link>
      <h2 className="text-xl font-bold mb-4">주문 목록</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">주문 ID</th>
            <th className="p-2 border">고객명</th>
            <th className="p-2 border">상품</th>
            <th className="p-2 border">수량</th>
            <th className="p-2 border">상태</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="p-2 border">{order.id}</td>
              <td className="p-2 border">{order.user}</td>
              <td className="p-2 border">{order.product}</td>
              <td className="p-2 border">{order.quantity}</td>
              <td className="p-2 border">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*
  1. 데이터를 어디서 가지고올지
  2. 서버에서 데이터 가져오기
  3. 페이지가 열릴 때 useEffect() 사용
  4. 서버 요청 보내기
*/

/* 
  0814

  [Error: Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?]
  - 함수를 실행하고서 return 문이 없어서 에러 발생
  - 항상 return 으로 객체(data) 반환 필요

  경로 url도 작성해서 넘겨야하며, 서버에서는 절대경로 주소를 사용해야함
  브라우저에서 서버를 호출할 때는 기본경로가 자동으로 붙음

  next page router 정리
  기본 원리
  - pages/디렉토리 기반 자동 라우팅(자동으로 url)을 잡아줌
  - 파일 이름이 곧 url 경로
  - 기본 루트 경로(메인 페이지)와 https://localhost:3000 이 매칭됨
  - 폴더 구조를 통해 동적 라우팅 지원 (pages/products/[id].js)
  - getServiceSideProps, getStaticProps, getStaticPaths로 데이터 패칭 처리
  
  주요 특징
  - 파일 기반 라우팅(직관적이고 쉬움)
  - 서버 사이드 렌더랑, 정적 생성, 클라이언트 렌더링 모두 지원
  - API Router 지원(pages/api/ 안에 파일 생성)
  - 중첩 라우팅, 레이아웃 공유 불편 -> app router와의 차이점


*/