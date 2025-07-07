import React, { useEffect, useState } from 'react'

export default function Q5() {

  const arr = [1, 4, 2, 3]
  const arr_len = 4;

  const [changed, setChanged] = useState([]);

  const reverseOrder = (arr, len) => {

    const newArr = [...arr]

    for(let i = 0; i < len / 2; i++) {
      console.log("전: ", newArr);
      [newArr[i], newArr[len - i - 1]] = [newArr[len - i - 1], newArr[i]]
      console.log("후: ", newArr);
    }

    return newArr;
  }

  useEffect(() => {
    setChanged(reverseOrder(arr, arr_len));
  }, []);

  return (
    <div>
      <h3>Q5. 배열의 순서 뒤집기</h3>
      <p>원본 : {JSON.stringify(arr)}</p>
      <p>결과 : {JSON.stringify(changed)}</p>
    </div>
  )
}
