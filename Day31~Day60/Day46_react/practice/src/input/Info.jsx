import React from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Info() {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const name = watch("name");
  const age = watch("age");

  const onNext = (data) => {
    navigate("/resume/depart");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "25vw" }}>
      <h3>기본 정보</h3>
      <label>이름</label>
      <input {...register("name", { required: "이름은 필수입니다" })}></input>
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      <label>나이</label>
      <input
        type="number"
        {...register("age", {
          required: "나이는 필수입니다",
          valueAsNumber: true,
          min: { value: 19, message: "19세 이상만 지원 가능합니다." },
        })}
      ></input>
      {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      <br />
      <button type="submit" onClick={handleSubmit(onNext)}>
        다음
      </button>
    </div>
  );
}
