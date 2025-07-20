import React from "react";
import { useFormContext } from "react-hook-form";

export default function Introduce() {
  const { register } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-bold">자기소개</h2>
      <textarea
        {...register("introduction", { required: true })}
        placeholder="간단한 자기소개를 작성해주세요."
        className="w-full border p-2 rounded h-28"
      />
    </div>
  );
}
