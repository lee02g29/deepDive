import React, { useState } from "react";

export default function QuickSort() {
  const [arr, setArr] = useState([5, 2, 9, 1, 6]);
  const [sorted, setSorted] = useState([]);

  const QuickSort = () => {
    if(arr.length <= 1) {
      return arr;
    }

    /* 데이터가 여러개 있을 때, 정렬이 필요 
      처음 기준을 잡을 때는 배열의 첫번째 값
    */
    const pivot = arr[0];

    /* 
      피벗보다 작은 값을 골라서 배열에 담기
      slice(1) : 1번 인덱스부터 끝까지 자르기
    */

    const left = arr.slice(1).filter(v => v < pivot)
    const right = arr.slice(1).filter(v => v > pivot)
  }

  const handleSort = () => {
    const result = QuickSort(arr);
    setSorted(result)


  }

  return (
    <div>
      QuickSort
      <p>정렬전 : {JSON.stringify(arr)}</p>
      <button onClick={handleSort}>정렬하기</button>

      <p>정렬후 : {JSON.stringify(sorted)}</p>
    </div>
  );
}

/*
  퀵 정렬
  - 분할 정복 방식으로 동작하는 알고리즘
  - 하나의 기준점을 잡고, 기준보다 작으면 왼쪽으로 보내고 크면 오른쪾으로 보냄
  
  - 반복적으로 정렬하는 방식
    실행할 떄는 자기자신을 호출하는 재귀가 필요함

  기준점(피벗 pivot)
  자바스크립트, 파이썬에서 sort() 정렬
  sort() 안에서 일어나는 정렬이 퀵 소트

  실무에서는 기본적으로 퀵소트만 쓰기 보다는
  퀵 소트로 뼈대를 만들고 추가적으로 안정성이나 성능을 보완하기 위해서
  라이브러리를 추가적으로 사용해서 만듦
*/
