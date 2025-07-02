import React, { useState } from "react";

export default function Q2() {
  const prod = [
    { name: "Keyboard", likes: 120 },
    { name: "Mouse", likes: 85 },
    { name: "Monitor", likes: 200 },
    { name: "Laptop", likes: 150 },
  ];

  const [sorted, setSorted] = useState([]);

    const merge = (left, right) => {

    let result = [];
    let i = 0, j  = 0;

    while(i < left.length && j < right.length) {
      if(left[i].likes < right[j].likes) {
        result.push(left[i]);
        i = i + 1;
      } else {
        result.push(right[j]);
        j = j + 1;
      }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j))
  }

  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const handleSort = () => {
    const result = mergeSort(prod);
    setSorted(result);
  };

  return (
    <div>
      <h4>Q2.</h4>
      <p>원본배열</p>
      <ul>
        {prod.map((item, index) => (
          <li key={index}>
            {item.name}({item.likes})
          </li>
        ))}
      </ul>

      <button onClick={handleSort}>정렬하기</button>

      <p>결과</p>
            <ul>
        {sorted.map((item, index) => (
          <li key={index}>
            {item.name}({item.likes})
          </li>
        ))}
      </ul>
    </div>
  );
}
