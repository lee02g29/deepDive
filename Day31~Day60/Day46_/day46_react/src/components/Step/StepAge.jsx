import React from "react";
import { useFormContext } from "react-hook-form";

export default function StepAge() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label>나이</label>
      <input
        type="number"
        {...register("age", {
          required: "나이는 필수입니다",
          min: { value: 10, message: "10세 이상만 참여 가능" },
        })}
      />
      {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
    </div>
  );
}
