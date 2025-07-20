import { useQuery } from "@tanstack/react-query";
import React from "react";


/*
  Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. 
  - 리액트 쿼리에서 많이 나오는 오류
  - 비동기 작업인데 return하지 않아서 생김
*/
function fetchUser() {
  // 여기에도 return 해주기 - 리액트 쿼리가 원하는 형태의 return
  return fetch(`https://jsonplaceholder.typicode.com/users/1`).then((res) => {
    if (!res.ok) throw new Error("API 요청 실패");
    return res.json();
  });
}

// 자동 실행 말고 수동 제어

/*
  컴포넌트가 마운트 시에 쿼리가 자동으로 실행 x
  -> data가 null로 되있음
*/
export default function ReactQuery2() {
  const { data, isFetching, isLoading, isError, refetch } = useQuery({
    // 필수
    queryKey: ["user"],
    queryFn: fetchUser,

    // 선택
    enabled: false, // 처음에 자동 실행하지 않음
  });

  return (
    <div>
      <h3>사용자 정보 수동 불러오기</h3>
      <button onClick={() => refetch()}>
        {isFetching ? "불러오는 중" : "불러오기"}
      </button>
      {isError && <p>에러 발생</p>}
      {data && (
        <div>
          <p>이름 : {data.name}</p>
          <p>이메일 : {data.email}</p>
        </div>
      )}
    </div>
  );
}

/*
  실행 순서
  1. 컴포넌트가 마운트 되어도 API 요청은 자동으로 실행되지 않음
  2. 버튼을 클릭하면 refetch()가 실행
  3. fetchUser() 함수가 호출되어 데이터를 가져옴
  4. 로딩 중일 땐 '불러오기 중' 으로 버튼 텍스트가 바뀜
  6. 데이터가 도착하면 name, email 표시


  refetch()
  - 강제로 다시 실행하는 함수
  - enable : false일 경우
*/
