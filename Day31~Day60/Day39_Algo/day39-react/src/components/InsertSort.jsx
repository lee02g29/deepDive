import React from "react";

export default function InsertSort() {
  const arr = [5, 2, 4, 10, 8, 1, 3, 6];

  // 값을 교체할 때 사용할 임시변수
  let temp;

  const insertSort = () => {
    for(let i = 0; i < arr.length; i++) {
      let j = i;

      while(arr[j] > arr[j + 1]) {
        // console.error(`j : ${j}, j + 1: ${j + 1}`)

        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        j--;

        /*
          j--를 하는 이유
          - 현재 숫자를 정렬된 앞 부분에 끼워넣는 정렬
          - 현재 숫자가 왼쪽에 있는 값보다 작으면, 계속 왼쪽으로 이동시켜셔 비교하고 넣어야하기 때문에
          현재 값이 크면, 왼쪽에 비교할 값들이 많아짐
        */
      }
    }
  }

  insertSort();

  return (
    <div>
      <h3>삽입 정렬</h3>
      <p>{JSON.stringify(arr)}</p>
    </div>
  );
}

/*
  삽입 정렬
  - 앞에서부터 순회하면서, 이미 정렬된 부분과 비교하여 적절한 위치에 삽입하는 방식
  - 각 숫자를 적절한 위치에 삽입하는 방식
  - 삽입 정렬의 장점은 꼭 필요할 때만 위치를 바꾼다는 점. 따라서, 선택 정렬과 버블 정렬보다 조금 효율적
  - 실무에서는 소규모 알고리즘을 작성할 때 사용

  - 정렬된 데이터에 값을 추가할 때, 삽입 정렬을 주로 사용
*/
