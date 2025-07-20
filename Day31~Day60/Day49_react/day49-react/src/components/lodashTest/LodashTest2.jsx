import { debounce } from "lodash";
import React, { useState } from "react";

export default function LodashTest2() {

  const [result, setResult] = useState('');

  const search = debounce((text) => {
    // 어떤 행동을 할 것인지 작성
    setResult(`${text}로 검색 결과 찾기`)
  }, 500)

  return (
    <div>
      <h3>검색창 debounce</h3>
      {/* 검색 창 자동완성(글자를 멈춰야 검색) */}
      <input
        onChange={(e) => search(e.target.value)}
        placeholder="검색어 입력 후 잠시 대기"
      />
    </div>
  );
}
