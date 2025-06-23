import React from "react";
import "../css/LoginInfo.css";
import LoginGuide from "../components/LoginGuide";
import LoginInput from "../components/LoginInput";
import AuthButtons from './../components/AuthButtons';
import SnsButtons from "../components/SnsButtons";

export default function LoginInfo() {
  const loginInput = [
    {
      text: "아이디",
      name: "id",
      type: "text",
      placeholder: "아이디를 입력하세요",
    },
    {
      text: "비밀번호",
      name: "password",
      type: "password",
      placeholder: "비밀번호를 입력하세요",
    },
  ];

  return (
    <div className="login__container w-full h-full p-20">
      <LoginGuide />

      <AuthButtons />

      {loginInput.map((input) => (
          <LoginInput inputText={input}/>
      ))}

      <button className="bg-blue-400 text-white rounded-2xl w-full h-10 m-2
      hover:bg-blue-500 hover:rounded-2xl">로그인</button>
      
      <span className="m-4">sns로 계속하기</span>

      <SnsButtons />
    </div>
  );
}
