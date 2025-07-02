import React, { useState } from "react";

export default function Q1() {
  const hints = ["apple", "banana", "carrot", "grape", "melon", "orange", "peach"];
  
  const [input, setInput] = useState([]);
  const [result, setResult] = useState('');

  const binarySearch = (arr, target) => {
    // 중간 인덱스를 찾아서 기준으로
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1; // 못찾으면 -1을 돌려줌
  };
  /*
    자바스크립트 : 알파벳 -> 아스키코드 자동 변환
    97 / 112?
    한글? -> 유니코드(2바이트)
  */
  const handleSearch = () => {
    let target = input.trim();
    let res = binarySearch(hints, target);

    if(res === -1) setResult('힌트 없음')
    else setResult(`힌트 발견 ${res}번째`)
  }

  return (
    <div>
      {" "}
      <h4>Q1.</h4>
      <input type="text" 
      value={input}
      onChange={e => setInput(e.target.value)}
      placeholder="문자열 입력"/>
      <button onClick={handleSearch}>찾기</button>

      <p>결과 : {result}</p>
    </div>
  );
}
