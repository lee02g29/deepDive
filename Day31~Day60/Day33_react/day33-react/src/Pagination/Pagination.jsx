import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Pagination() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  // 임시 우회
  // url 주소들을 작성할 때 get요청이 에러나는 경우에는 url을 가장먼저 확인
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const requestUrl = 'https://openapi.naver.com/v1/search/image';

  const [imgs, setImgs] = useState([]);

  let itemCount = 10;
  const totalPage = imgs.length / itemCount;
  // 총 페이지 : 총 아이템의 개수 / 한 페이지에 보여질 개수

  let startPage = 1;

  const fetchImages = async () => {
    const res = await fetch(`${proxy}${requestUrl}?query=고양이&display=50`, {
      headers: {
        "X-Naver-Client-Id": clientId,
        "X-Naver-Client-Secret": clientSecret,
      },
    });

    const data = await res.json();
    console.log(data.items);
    setImgs(data.items);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      Paigination
      <h1>페이지네이션</h1>
      <input text="" placeholder="검색어" /> <br />
      <button>검색</button>
      <h1>이미지 출력</h1>
      <ul>
        {imgs.map((img, i) => (
          <li key={i}>
            <img src={img.thumbnail} alt={img.title}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
  Paigination
  - 한 번에 너무 많은 데이터를 한 화면에 보여주면 사용자 경험이 떨어지고,
  네트워크, 렌더링 성능이 부담이 됨
  따라서, 데이터를 여러 페이지로 나눠서 제공하는 것

  현재 페이지, 총 페이지 수, 이전/다음 버튼, 페이지 번호 등
  사용자가 원하는 위치로 빠르게 이동 할 수 있도록 함

  curl "https://openapi.naver.com/v1/search/image.xml?query=%EC%A3%BC%EC%8B%9D&display=60&start=1&sort=sim" \
    -H "X-Naver-Client-Id: {애플리케이션 등록 시 발급받은 클라이언트 아이디 값}" \
    -H "X-Naver-Client-Secret: {애플리케이션 등록 시 발급받은 클라이언트 시크릿 값}" -v
  
    페이지네이션

    */
