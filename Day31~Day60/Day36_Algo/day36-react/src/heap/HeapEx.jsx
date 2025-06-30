import React, { useState } from 'react'
import MinHeap from 'heap-js'
import Heap from 'heap-js'

export default function HeapEx() {

  // 라이브러리 사용
  // const heap = new Heap.MinHeap()
  // // = const heap = new Heap()

  // heap.push(5, 1, 3)

  // console.log("데이터 : ", heap.pop)

  /*
    직접 힙 구현
    - 배열을 이용해서 최소힙
      - React 상태로 힙 관리(useState)
      - 삽입, 삭제, 출력 기능 
  */

  // 입력한 값 저장
  const [input1, setInput] = useState(0);

  // 힙 구조를 저장하는 배열
  const [heap, setHeap] = useState([]);

  /* 실제 힙 구조를 이용해서 데이터를 제일 앞쪽으로 가져오는 함수 */
  const heapInsert = (arr) => {
    console.log("heapInsert ")

    /*
      지금 추가한 마지막 요소의 인덱스를 i에 저장
      배열의 마지막은 항상 자식노드임
    */
    let i = arr.length - 1;


    while(i > 0) {
      /*
        현재 부모를 찾을 때 -1을 하는 이유는 배열의 번호가 0부터 시작하기 때문
        floor()는 소수점 버리기
      */
      const parent = Math.floor((i - 1) / 2);
      console.log("부모 : ", parent);

      if(arr[parent] <= arr[i]) {
        break; // 부모가 더 작으면 끝
      } 

      // 부모가 더 크면 위치를 변경
      [arr[parent], arr[i]] = [arr[i], arr[parent]];

      // 부모 위치로 이동
      i = parent

    }

    console.log("변경된 배열 : ", arr)

    return arr;
  }
  /*
    실제 삭제하는 함수
    부모 -> 자식
    루트 노드부터 시작해서 자식 노드들과 비교하여 내려가며 자리를 바꿈
  */

  const heapDown = (arr) => {

    let i = 0;
    const length = arr.length;
    
    while(true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let small = i;

      // 왼쪽 자식이 배열 범위 안에 있고, 부모보다 작으면 왼쪽을 가장 작은 노드로 지정
      if(left < length && arr[left] < arr[small]) {
        small = left;
      }


      // 오른쪽 자식이 배열 범위 안에 있고, small보다 작으면 오른쪽을 가장 작은 노드로 지정
      if(right < length && arr[right] < arr[small]) {
        small = right;
      }

      /*
        자식들보다 부모가 더 작으면 이미 정렬된 상태이므로
        종료
      */

      if(small === i) break;

      // 위에서 실행한 내용을 기준으로 값을 교환

      [arr[i], arr[small]] = [arr[small], arr[i]]

      // 자식으로 내려가서 다시 비교
      i = small;

    }
    
    return arr;
  }

  // 삽입하는 함수
  const insertValue = () => {
    // string 출력됨
    // const value = typeof input;

    const value = parseInt(input1)
    console.log(value)

    // 예외 처리
    /* Not-a-Number : 숫자가 아님 
      숫자가 아니면 true, 숫자면 false
    */
    if(isNaN(value)) { // !isNaN() {숫자이면 실행할 명령문}
      return; // 숫자가 아니면 힙에 저장할 필요 x
    }

    // 숫자면 힙에 저장
    const newHeap = heapInsert([...heap, value]);

    setHeap(newHeap);
    setInput('');
  }

  // 삭제하는 함수
  const removeValue = () => {
    // 배열이 비어있다면 실행 x
    if(heap.length === 0) {
      return;
    }

    // 기존 배열을 가져옴
    const newHeap = [...heap];
    const min = newHeap[0];
    newHeap[0] = newHeap.pop(); // 마지막 데이터를 루트로 올림
    setHeap(heapDown(newHeap)); // 정렬

    alert(`꺼낸 최소값: ${min}`)
  }

  return (
    <div>
      <h3>Heap 자료구조</h3>
      <input type='text'
      placeholder='숫자 입력'
      value={input1}
      onChange={(e) => setInput(e.target.value)}></input>

      <button onClick={insertValue}>추가</button>
      <button onClick={removeValue}>최소값 삭제</button>
    
      <h4>Heap 구조 배열</h4>
      <p>{JSON.stringify(heap)}</p>
    </div>
  )
}

/*
  Heap 
  - 우선 순위가 높은 것부터 꺼내기 쉽게 만든 구조
  - 트리구조지만, 배열로 구현됨
  - 항상 맨 위(루트 노드)가 최대값/최소값
  - 알림, 실시간 채팅, 콜백시스템, 경로, 스케쥴러

  - 실제 개발자 라이브러리(외부 라이브러리)
    ex) heap-js, TinyQueue

  완전 이진트리
  - 0레벨(층) - 인덱스 0, 1개
  - 1레벨 인덱스 1, 2
  - 2레벨 인덱스 3, 4, 5, 6

  부모에서 자식으로
  왼쪽 : 인덱스 * 2 + 1
  오른쪽 : 인덱스 * 2 + 2
*/