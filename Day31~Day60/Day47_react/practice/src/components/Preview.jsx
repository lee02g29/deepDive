import React from "react";
import { useJoinStore } from "./../stores/formStore";

export default function Preview() {
  const { formData } = useJoinStore();
  console.log(JSON.stringify(formData, null, 2));
  console.log(formData.name);
  return (
    <div>
      <h2>기본 정보</h2>
      <p>이름 : {formData.name}</p>
      <p>학년 : {formData.grade}</p>
      <p>연락처 : {formData.phone}</p>

      <div style={{ display: "flex", gap:'30px'}}>
        <div>
          <h2>희망 동아리</h2>
          <p>{formData.club.value}</p>
          <p>
            {formData.volnteer ? "자원봉사" : ""} {' '}
            {formData.study ? "스터디" : ""}{' '}
            {formData.health ? "운동" : ""}
          </p>
        </div>

        <div>
          <h2>자기 소개</h2>
          <p>{formData.introduction}</p>
        </div>
      </div>
    </div>
  );
}
