import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function BlogSearch() {
  /*
    인코딩을 안하면 한글이 깨지는 경우가 있어서 검색이 안될 수 있음
    encodeURIComponent()
    자바스크립트 전역함수
    문자열 URI(웹 주소)의 한 부분으로 안전하게 사용할 수 있도록
    형태를 반환해주는 함수
   */
  const keyword = "야구";
  const requestUrl = `https://openapi.naver.com/v1/search/blog.json?query=야구`;

  // 1. 클라이언트 id
  const clientId = import.meta.env.VITE_NAVER_CLIENT;
  const secretId = import.meta.env.VITE_NAVER_SECRET;
  const proxy = 'https://cors-anywhere.herokuapp.com/'

  const url =`${proxy}${requestUrl}`
  console.log(url)
  /* 2. 포트번호 및  url 확인 
    API 설정에 검색이 포함되어있는지 확인
  */

  const [blog, setBlog] = useState([]);


  useEffect(() => {
    /*
      네이버에서 검색된 내용을 전달받기 위해 통신

      이를 위해서 기본정보들이 필요함
      url, 
      method
      headers
    */

    fetch(url,{
      method : 'GET',
      headers : {
        "X-Naver-Client-Id" : clientId,
        "X-Naver-Client-Secret" : secretId,
      }
    })

      .then((res) => {
        console.log("정상")
        return res.json();
      })
      .then((data) => {
        console.log(data.items)
      })
      .catch((err) => {
        console.log("오류", err)
      });
  }, []);

  return <div>BlogSearch</div>;
}

/*
  브라우저에서 직접 Naver Open Api는 
  네이버가 로컬 오리진(Access-Control-Allow-Origin)을
  허용하지 않기 때문에 헤더가 없어서 CORS 에러를 발생시킴

  브라우저에서 직접 fetch() 할 수 없음

  네이버 Open Api 기본 설계가 서버와 서버끼리 데이터를 전달하고 만들 수 있도록 만들어짐
  
  임시 CORS 우회 프록시 서버 
  실무 사용 x
  - https://cors-anywhere.herokuapp.com/ 주소에서 임시 사용 버튼 클릭
  1시간정도 임시 사용가능

  실행 순서
  React -> Cors 프록시 -> 네이버 API

  설정시 네이버 url 앞에 우회하는 주소 작성
  실행 전에 적용 버튼 클릭
*/