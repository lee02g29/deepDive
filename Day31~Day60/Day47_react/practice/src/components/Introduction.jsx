import React from "react";
import { useFormContext } from "react-hook-form";

export default function Introduction() {
  const { register } = useFormContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "30vw",
        marginBottom: "10px",
      }}
    >
      <h2 className="text-xl font-bold">자기소개</h2>
      <textarea
        style={{ width: "30vw", height: "10vh" }}
        {...register("introduction", { required: true })}
        placeholder="간단한 자기소개를 작성해주세요."
        className="w-full border p-2 rounded h-28"
      />
    </div>
  );
}
