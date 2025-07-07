import React, { useEffect, useState } from "react";

export default function Q8() {
  const sentence = ["never odd or even.", "palindrome"];
  const [res, setRes] = useState([]);

  const isPalindrome = (sent) => {
    let newSent = sent.trim().replaceAll(" ", "").replaceAll(".", "");

    for (let i = 0; i < newSent.length / 2; i++) {
      if (newSent[i] !== newSent[newSent.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const resultArr = sentence.map((sent) => isPalindrome(sent));
    setRes(resultArr);
  }, []);

  return (
    <div>
      <h3>Q8. 팰린드롬 판단하기</h3>
      {sentence.map((sent, index) => (
        <p key={index}>{sent}</p>
      ))}

      <p>결과</p>
      {res.map((sent, index) => {
        console.log(sent);
        return <p key={index}>{sent ? "true" : "false"}</p>;
      })}
    </div>
  );
}
