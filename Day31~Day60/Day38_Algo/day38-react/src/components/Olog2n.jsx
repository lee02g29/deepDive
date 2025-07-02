import React, { useState } from 'react'

export default function Olog2n() {

  /*
    숫자 찾기 게임(이진 탐색)
    - 배열의 가운데를 기준으로
    - 기준이 잡히면 기준을 중심으로 왼쪽은 기준보다 작은 값들
      오른쪽은 기준보다 큰 값들이 있음
    
  */

  const sortedNumbers = [3, 6, 9, 12, 15, 18, 21, 24, 27];

  // 입력한 값 저장
  const [target, setTarget] = useState('')

  // 결과를 저장하는 상태
  const [result, setResult] = useState(null);

  // 이진 탐색 함수
  const binarySearch = (arr, target) => {

    // 중간 인덱스를 찾아서 기준으로
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
      const mid = Math.floor((left + right) / 2);

      if(arr[mid] === target) {
        return mid
      } else if(arr[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1; // 못찾으면 -1을 돌려줌
  }
  
  // 클릭했을 때 함수
  const handleSearch = () => {
    const num = parseInt(target);

    if(isNaN(num))  {
      alert('숫자를 입력하세요')
      return;
    }

    const idx = binarySearch(sortedNumbers, num);
    setResult(idx)
  }

  return (
    <div>
      <h4>숫자 찾기 게임</h4>
      <p>숫자 배열 : {JSON.stringify(sortedNumbers)}</p>

      <input type='text' 
      placeholder='숫자 입력'
      onChange={(e) => setTarget(e.target.value)}
      />
      <button onClick={handleSearch}>찾기</button>

      {
        result != null && (
          <p>
            {
              result === -1 ? "찾을 수 없음" : `${result}번째 위치에 있음`
            }
          </p>
        )
      }
    </div>
  )
}

/*
O(log2n) 로그 시간 복잡도
  - 입력값의 크기가 커질 수록 실행 시간이 로그만큼 짧아지는 알고리즘
  - n이 증가해도 실행시간이 느리게 증가함
  - 데이터가 반씩 잘려나감
  - log2는 반씩 줄이는 구조


  이진 탐색 
  - 조건 : 정렬되어 있어야 함
  - npm install lodash 이용해서 이진탐색을 진행하는 경우도 있음
    - 배열, 객체, 문자열 등을 쉽고 빠르게 처리할 수 있는 함수들이 많음
    - 성능 최적화된 함수들이 많아서 복잡한 작업을 간단하게 할 수 있음
  
*/