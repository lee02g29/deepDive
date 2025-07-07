import React, { useState } from "react";

export default function HashPasswordSHA() {
  // 1. 입력된 비밀번호 저장
  const [password, setPassword] = useState("");

  // 2. 암호화된 결과를 저장
  const [hashTable, setHashTable] = useState("");

  // 3. SHA-256 해시를 만들어주는 함수
  async function toSHA256(text) {
    // 3-1) TextEncoder 객체. 문자열을 byte 배열로 변환
    const encoder = new TextEncoder();

    const data = encoder.encode(text);
    console.log(`현재 encoder: ${data}`);

    /*
      3-2) crypto.subtle.digest('SHA-256', data), 실제로 암호화 된 값으로 변환
      Promise 객체로 반환함
      'SHA-256' : 최대 256비트 길이(16진수 문자열로 64글자)로 나누어서 표현
    */
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    console.log(hashBuffer);

    // 3-3) 데이터를 하나씩 볼 수 있는 배열로 바꿈
    /* Int32Array -> 4바이트 단위로 끊어서 해석
      Uint8Array -> 1바이트 단위로 끊어서 해석 (부호없이 0~255)
      TypeArray
    */
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // 3-4) 숫자 하나하나를 16진수(0~f) 문자로 바꾸고, 붙여서 문자열을 만듦
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

      return hashHex;
  }

  const passwordChange = async () => {
    const result = await toSHA256(password);
    setHashTable(result)
  }

  return (
    <div>
      <h3>crpyto 라이브러리를 이용해서 암호화</h3>
      <input
        type="text"
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={passwordChange}>암호화</button>
      {hashTable && (
        <div>
          <strong>결과</strong>
          {hashTable}
        </div>
      )}
    </div>
  );
}

/*
  window.crypto.subtle.digest()

*/
