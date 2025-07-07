import React, { useEffect, useState } from 'react'

export default function SelectionSort() {
  
  const arr = [5, 2, 4, 10, 8, 1, 3, 6]

  // 전체를 순회하면서 가장 작은 숫자를 맨 앞으로
  const selectSort = () => {
    for(let i = 0; i < arr.length; i++) {

      let minIdx = i;

      for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      /* 가장 작은 공간의 인덱스를 가지고,
        현재 i와 위치를 교환 */
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      // console.log(`현재 가장 제일 작은 값 : ${arr[minIdx]}`)
      // console.log(`현재 배열의 값: ${arr}`)
    }
  }
  selectSort();

  return (
    <div>
      <h3>선택 정렬</h3>
      <p>{JSON.stringify(arr)}</p>
    </div>
  )
}

/*
  선택 정렬
  - 가장 작은 데이터를 선택해서 앞쪽으로 정렬하는 방식
  - 배열을 처음부터 끝까지 돌면서, 가장 작은 값을 찾아 현재 위치와 교환
  - 시간 복잡도O(n^2), 공간복잡도 O(1).
  - 비교적 간단하지만 느림
  - 실무에서 잘 안쓰지면 면접에서 잘 나옴
*/