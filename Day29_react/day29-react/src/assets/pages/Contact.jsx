import React from "react";
import { Form, redirect } from "react-router-dom";

export async function contactAction({ request }) {
  /* form에서 입력한 데이터 수집 */
  const data = await request.formData();
  // form에 대한 내용을 꺼내오기
  const name = data.get("name");
  console.log("입력된 이름 : ", name);

  return redirect('/')
}

export default function Contact() {
  return (
    <div>
      <h1>이름 입력</h1>
      <Form method="post">
        <input type="text" name="name" placeholder="이름을 입력하세요" />
        <input type="text" name="age" placeholder="나이를 입력하세요" />
        <button type="submit">전송하기</button>
      </Form>
    </div>
  );
}

/*
  폼 태그를 이용하여 데이터를 전송할 때,
  html form도 같음
  - 데이터를 서버로 보낼때 담아주는 변수명처럼 설정이 필요

  name 속성을 이용해서
*/
