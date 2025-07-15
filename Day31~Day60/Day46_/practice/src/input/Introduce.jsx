import React from "react";
import {  useFormContext } from "react-hook-form";

export default function Introduce() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "25vw" }}>
      <h3>자기소개</h3>
      <textarea
        style={{ height: "15vh" }}
        placeholder="간단한 자기소개를 입력해주세요."
        {...register("introduce", { required: "자기소개는 필수입니다" })}
      ></textarea>
      {errors.introduce && (
        <p style={{ color: "red" }}>{errors.introduce.message}</p>
      )}

      <br />
      <button type="submit">제출</button>
    </div>
  );
}
