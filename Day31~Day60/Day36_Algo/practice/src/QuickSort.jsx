import React from "react";
import { useState } from "react";

export default function QuickSort() {
  const [inputs, setInputs] = useState("");
  const [arr, setArr] = useState([]);
  const [sorted, setSorted] = useState([]);

  const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[0];

    const left = arr.slice(1).filter((val) => val >= pivot);
    const right = arr.slice(1).filter((val) => val < pivot);
    // 둘 중 하나에 =를 넣어줘서 중복 숫자도 포함할 수 있도록 해결

    return [...quickSort(left), pivot, ...quickSort(right)]
  };

  const addNumber = () => {
    const num = parseInt(inputs);

    if (isNaN(num)) return;

    setArr([...arr, num]);
    setInputs("");
  };

  const sortNumbers = () => {
    const res = quickSort(arr);
    setSorted(res);
  };

  return (
    <div>
      <h2>퀵 소트</h2>
      <input
        type="text"
        placeholder="숫자를 입력해주세요"
        value={inputs}
        onChange={(e) => setInputs(e.target.value)}
      ></input>
      <button onClick={addNumber}>숫자 추가</button>

      <p>정렬전 : {JSON.stringify(arr)}</p>

      <button onClick={sortNumbers}>내림차순으로 정렬하기</button>

      <p>정렬후 : {JSON.stringify(sorted)}</p>
    </div>
  );
}
