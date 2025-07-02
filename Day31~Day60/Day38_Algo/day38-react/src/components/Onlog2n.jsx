import React, { useState } from "react";

export default function Onlog2n() {
  const [input, setInput] = useState("");
  const [sorted, setSorted] = useState([1,2,3,4,5,6,7])

  const merge = (left, right) => {
    // 두 배열을 순차적으로 비교 -> 작은 값부터 배열에 넣어서 병합

    let result = [];
    let i = 0, j  = 0;

    while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
        result.push(left[i]);
        i = i + 1;
      } else {
        result.push(right[j]);
        j = j + 1;
      }
      console.log("i: ", i , "j: " ,j);
      console.log("left 배열에 남은 값: ",left );
      console.log("right 배열에 남은 값: ",right);
    }
    // 위에서 남는 값(어느 한쪽에만 남음)을 뒤에 붙여 최종 배열을 완성
    return result.concat(left.slice(i)).concat(right.slice(j))
  }

  /*
    가독성을 높이고 코드를 간결하게 사용하고 싶을 때
    while(i < left.length && j < right.length) {
      result.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    return [...result, ...left, ...right]  

    shift() 배열 앞 요소를 제거
    O(n) 성능 저하 위험이 생길 수 있음
  */

  const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;

    // 중간 인덱스 번호
    const mid = Math.floor(arr.length / 2);
    console.log("중간 값", mid);

    // 재귀 호출해 정렬
    const left = mergeSort(arr.slice(0, mid)); 
    const right = mergeSort(arr.slice(mid));

    // 함수를 이용해서 정렬하고 결과를 합쳐서 반환
    return merge(left, right);
  }

  const handleSort = () => {
    // 문자 자체로 한번에 받아오면 정렬 불가능 -> 문자열을 쪼갠 뒤 숫자로 변환하여 배열을 생성

    const arr = input
      .split(",")
      .map((num) => parseInt(num.trim())) // , 기준으로 분리 후 공백 제거
      .filter((n) => !isNaN(n)); // 숫자들만

      const result = mergeSort(arr);
      setSorted(result)
  };

  return (
    <div>
      <h4>선형 로그 시간 복잡도</h4>
      <h6>Merge Sort</h6>

      <p>입력 배열 (쉼표로 구분) : </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <button onClick={handleSort}>정렬 시작</button>
      {
        sorted.length > 0 && (
          <div>
            <h5>정렬 결과</h5>
            <p>{JSON.stringify(sorted)}</p>
          </div>
        )
      }
    </div>
  );
}

/*
  선형 로그 시간 복잡도
  - 한 번 전체 순회를 하면서 그 안에서 log2n 작업을 반복할 때 발생하는 복잡도
  - 정렬 알고리즘(병합, 퀵) 에서 등장하고, n이 커져도 n^2보다 훨씬 효율적으로 정렬함
  - 분할 정복에서 자주 사용함

  병합 정렬
  - 기준 : 배열의 중간 인덱스
  - 배열을 계속 반으로 나누면서 기준이 바뀜
  - 병합할 때는 항상 작은 수부터 비교해서 넣음

  순서 
  - 배열이 1개씩 될 때까지 나눔
  - 쌍끼리 비교해서 합침
  - 정렬된 쌍들을 차례대로 합침
  - 최종적으로 전체가 정렬
*/
