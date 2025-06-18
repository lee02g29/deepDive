import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import { set, ref } from "firebase/database";

export default function Signup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = (e) => {
    const signupId = uuidv4();
    console.log(signupId);

    console.log("유저 정보 : ", id, password, email, phone);

    const data = {
      "id" : id,
      "password" : password,
      "email" : email,
      "phone" : phone,
    }

    /* 저장소 이름 : signupList
      1. 파이어베이스에서 db 정보 가져오기 
      2. set함수를 이용해서 데이터쓰기
      ref 함수를 이용해서 정보를 보내기
    */
    set(ref(db, `signupList/${signupId}`), data)
      .then(() => alert("회원가입을 축하합니다."))
      .catch((err) => alert("에러가 발생했습니다.", err));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="아이디 입력"
        onChange={(e) => setId(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="비밀번호 입력"
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="이메일 입력"
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="전화번호 입력"
        onChange={(e) => setPhone(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleSignUp}>회원 가입</button>
    </div>
  );
}
