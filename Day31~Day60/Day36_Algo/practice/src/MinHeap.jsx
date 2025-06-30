import React, { useState } from "react";

export default function MinHeap() {
  const [inputs, setInputs] = useState("");
  const [arr, setArr] = useState([]);

  const insertHeap = (arr) => {
    let i = arr.length - 1;

    while(i > 0) {
      const parent = Math.floor((i - 1) / 2);

      if(arr[i] >= arr[parent]) break;

      [arr[parent], arr[i]] = [arr[i], arr[parent]];

      i = parent
    }
    
    return arr;

  }

  const removeHeap = (arr) => {
    let i = 0;

    while(true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let small = i;

      console.log(arr[small])

      if(left < arr.length && arr[left] < arr[small]) {
        small = left;
      }
      
      if(right < arr.length && arr[right] < arr[small]) {
        small = right;
      }

      if(small === i) break;

      [arr[i], arr[small]] = [arr[small], arr[i]]; 

      i = small;
    }

    return arr;
  }

  const addValue= () => {
    const num = parseInt(inputs);

    if (isNaN(num)) return;
    setArr(insertHeap([...arr, num]));
    setInputs("");
  };

  const removeValue = () => {
    if(arr.length === 0) return;

    if(arr.length === 1) {
      setArr([])
      return;
    }

    const newHeap = [...arr];
    const min = newHeap[0];
    newHeap[0] = newHeap.pop();
    setArr(removeHeap(newHeap));
  }

  return (
    <div>
      {" "}
      <h2>최소힙</h2>
      <input
        type="text"
        placeholder="숫자를 입력해주세요"
        value={inputs}
        onChange={(e) => setInputs(e.target.value)}
      ></input>
      <button onClick={addValue}>숫자 추가</button>
      <button onClick={removeValue}>최소값 삭제</button>
    
      <p>입력한 숫자 : {JSON.stringify(arr)}</p>

    </div>
  );
}
