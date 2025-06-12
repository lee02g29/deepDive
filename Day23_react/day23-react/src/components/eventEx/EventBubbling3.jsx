import React from "react";

export default function EventBubbling3() {
  const handleClick = (event) => {
    event.preventDefault(); // 이동 막기
    alert("링크 이동 막기");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 자동제출 막기
    alert("폼 제출 전 유효성 검사");
  };

  // 숫자만 입력되었는지 확인
  const input1 = 123456;

  /* 패턴은 문자 "" 안에 작성하는 것이 아님. 
    /패턴/을 작성해야함 */
  const onlyNumber = /^[0-9]+$/; // 숫자
  const onlyKorean = /^[가-힣]+$/; // 한글

  // 8자리 이상 영문 + 숫자 비밀번호 검사
  const pwCheck = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  console.log(onlyNumber.test(input1))
  

  return (
    <div>
      <h1>기본 동작 막기</h1>
      <a href="https://www.naver.com" onClick={handleClick}>
        네이버
      </a>

      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <input type="submit" value="제출"></input>
      </form>

    </div>
  );
}

/*
  preventDefault()
  브라우저의 기본 동작을 막는 함수
  <a>, <form> 태그 자동 제출 또는 링크 이동, 마우스 휠 동작 등을 막음


  input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`
  - void(비어있다 또는 없다 반환되는타입이 없다)라는 의미
  - input태그는 void element (빈 요소) 이기 때문에 </input> 닫는 태그
  를 쓰면 안됨. 
  - 내용을 넣고 싶다면 value 속성을 이용해야함.

  정규식
  - 문자열 안에서 특정한 패턴을 찾는 도구
  /정규식패턴/.test("문자열") 또는 match()를 통해 검사

  React Hook Form
  - 폼 상태 관리, 유효성 검사, 제출 처리를 도와주는 라이브러리
  - 사용하려면 다운로드가 필요 (npm install react-hook-form)
    useForm()
  - 상태 관리, 리렌더링을 최소화해서 성능이 좋아짐
  - 중대형 프로젝트에서는 거의 기본처럼 사용
    (Formik, Yup 함께 많이 쓰임)
  */

