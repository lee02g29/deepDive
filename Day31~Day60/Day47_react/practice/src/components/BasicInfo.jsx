import React from "react";
import { useFormContext } from "react-hook-form";

export default function BasicInfo() {
  const { register } = useFormContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "25vw",
        marginBottom: "10px",
      }}
    >
      <h2 className="text-xl text-bold">기본 정보</h2>
      <input
        {...register("name", { required: true })}
        placeholder="이름"
        className="w-fll border p-2 rounded"
      ></input>
      <input
        {...register("grade", { required: true, valueAsNumber: true })}
        type="number"
        placeholder="학년"
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
