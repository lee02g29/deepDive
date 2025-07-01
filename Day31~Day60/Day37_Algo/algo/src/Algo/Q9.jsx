import React from "react";
import { useState } from "react";

export default function Q9() {
  const [num, setNum] = useState("");
  const [prev, setPrev] = useState("");
  const [res, setRes] = useState([]);

  const handleNum = () => {
    let nums = Number(num);
    let newArr = [];
    setPrev(nums);

    if (isNaN(nums)) {
      alert("숫자를 입력해주세요.");

      setNum("");
      setPrev("");
      setRes("");

      return;
    }

    if (nums > 100000001) {
      alert("100,000,000 이하로 입력해주세요.");
      setNum("");
      setPrev("");
      setRes("");
      
      return;
    }
    // 둘이 합쳐서 하나 + try catch

    while (nums > 0) {
      let temp = nums % 10;
      nums = Math.floor(nums / 10);

      console.log(temp, nums);

      newArr.push(temp);
      console.log(temp);
    }

    setNum("");
    setRes(newArr);
  };

  return (
    <div>
      <h2>Q9.</h2>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="숫자를 입력하세요"
      ></input>
      <button onClick={handleNum}>숫자 입력</button>
      <h4>결과</h4>
      {res.length > 0 && <span>{prev} -&gt; </span>}
      {res.map((num, index) => (
        <span key={index}>{num}</span>
      ))}
    </div>
  );
}
