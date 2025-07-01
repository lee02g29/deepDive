import React from "react";
import { useState } from "react";

export default function Q7() {
  const [num, setNum] = useState("");
  const [res, setRes] = useState([]);

  const handleNum = () => {
    const nums = Number(num);
    let newArr = [];

    if (isNaN(nums)) {
      alert("숫자를 입력해주세요.");

      setNum("");

      return;
    }

    if (nums > 1000) {
      alert("숫자는 1000이하로 입력해주세요.");
      setNum("");
      return;
    }

    for (let i = 1; i <= nums; i++) {
      console.log(i);
      newArr.push(i);
    }

    setNum("");
    setRes(newArr);
  };

  return (
    <div>
      <h2>Q7.</h2>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="숫자를 입력하세요"
      ></input>
      <button onClick={handleNum}>숫자 입력</button>
      <h4>결과</h4>
      {res.map((n, i) => (
        <p key={i}>{n}</p>
      ))}
    </div>
  );
}
