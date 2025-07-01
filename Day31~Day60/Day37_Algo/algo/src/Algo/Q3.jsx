import React from "react";
import { useState } from "react";

export default function Q3() {
  const [num, setNum] = useState("");
  const [res, setRes] = useState([]);

  const handleNum = () => {
    let nums = Number(num);
    let newStar = [];
    setNum("");

    if (isNaN(nums)) {
      alert("숫자를 입력해주세요.");

      setNum("");

      return;
    }

    for (let n = nums; n > 0; n--) {
      console.log(n);
      let star = "";
      for (let i = 0; i < n; i++) {
        star += "*";
      }
      console.log(star);
      newStar.push(star);
    }

    setRes(newStar);
  };

  return (
    <div>
      <h2>Q3.</h2>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="숫자를 입력하세요"
      ></input>
      <button onClick={handleNum}>숫자 입력</button>
      <h4>결과</h4>
      {res.map((s, index) => (
        <p key={index}>{s}</p>
      ))}
    </div>
  );
}
