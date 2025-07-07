import React from "react";

export default function HashTest2() {
  const tableSize = 5;
  const table = new Array(tableSize).fill(null).map(() => []);

  function insert(key, value) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = hash + key.charCodeAt(i);
      // console.log(hash);
    }

    // console.log("해싱 : ", hash);

    // 배열의 인덱스를 결정
    const index = hash % tableSize;

    // console.log("인덱스 : ", index);

    // 테이블에 저장
    table[index].push([key, value]);

    // console.log("현재 테이블 : ", table);
  }

  insert("dog", "강아지");
  insert("cat", "고양이");
  insert("bird", "새");

  return (
    <div>
      <h3>Hash 테이블에 저장하는 시뮬레이션</h3>
      <p>{JSON.stringify(table)}</p>
    </div>
  );
}
