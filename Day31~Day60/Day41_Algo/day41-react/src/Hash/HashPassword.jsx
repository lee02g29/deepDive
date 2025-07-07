import React, { useState } from "react";

export default function HashPassword() {
  const [password, setPassword] = useState("");
  const [hashTable, setHashTable] = useState("");

  const passwordChange = () => {
    const key = password;
    let hash = 0;
    const tableSize = 10;


    for (let i = 0; i < key.length; i++) {
      hash = hash + key.charCodeAt(i);
      // console.log(hash);
    }

    // console.log("해싱 : ", hash);
    const index = hash % tableSize;

    // console.log("인덱스 : ", index);

    setHashTable(`총 합 해시값: ${hash} 인덱스: ${index}`)
  };

  return (
    <div>
      <h3>비밀번호 암호화</h3>
      <input
        type="text"
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={passwordChange}>암호화</button>
      {
        hashTable && (
          <div>
            <strong>결과</strong>
            {hashTable}
          </div>
        )
      }
    </div>
  );
}

/*
  브라우저 내장 Web Crypto Api를 활용
  bcrypt, js-sha256 외부 라이브러리
 */
