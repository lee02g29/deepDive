import React from "react";
import { useLocation } from "react-router-dom";

export default function FinalCheck() {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <h2>지원이 완료되었습니다!</h2>
      {data && (
        <>
          <p>이름: {data.name}</p>
          <p>나이: {data.age}</p>
          <p>경력: {data.gender}</p>
          <p>희망 부서: {data.depart}</p>
          <p>자기소개: {data.introduce}</p>
        </>
      )}
    </div>
  );
}
