import React, { useState } from "react";

export default function Test6() {
  const [input, setInput] = useState("");
  const [isPalindrome, setIsPalidrome] = useState(null);

  const checkPalindrome = () => {
    /*
      정규식
      ^ 이외에,
      g : 전체 문자열에서 찾기
    */
    const a = input.toLowerCase().replace(/[^a-z]/g,'');
    const re = a.split("").reverse().join("");

    setIsPalidrome(a === re);
  };

  return (
    <div>
      <h3>팰린드롬</h3>
      <input
        type="text"
        placeholder="문장을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <button onClick={checkPalindrome}>확인</button>
      {isPalindrome !== null && (
        <p>
          결과:{" "}
          {isPalindrome ? "✅ Palindrome입니다!" : "❌ Palindrome이 아닙니다."}
        </p>
      )}
    </div>
  );
}

/*
  팰린드롬
  - 앞 뒤로 읽어도 같은 문장

*/
