import React from "react";
import { useFormContext } from "react-hook-form";

export default function BasicInfo() {
  // register로 input태그 연결
  // 공유해서 사용하고자 함
  const { register } = useFormContext();

  return (
    <div>
      <h2 className="text-xl text-bold">기본 정보</h2>
      <input
        {...register("name", { required: true })}
        placeholder="이름"
        className="w-fll border p-2 rounded"
      ></input>
      <input
        {...register("age", { required: true })}
        placeholder="나이"
        className="w-fll border p-2 rounded"
      ></input>
      <input
        {...register("phone", { required: true })}
        placeholder="연락처"
        className="w-fll border p-2 rounded"
      ></input>
    </div>
  );
}
