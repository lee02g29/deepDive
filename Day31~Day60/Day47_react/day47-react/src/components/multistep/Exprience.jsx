import React from "react";
import { useFormContext } from "react-hook-form";

export default function Exprience() {
  const { register } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-bold">경력 유무</h2>
      <label className="block">
        <input
          type="radio"
          value="있음"
          {...register("experience", { required: true })}
        />
        있음
      </label>
      <label className="block">
        <input type="radio" value="없음" {...register("experience")} />
        없음
      </label>
    </div>
  );
}
