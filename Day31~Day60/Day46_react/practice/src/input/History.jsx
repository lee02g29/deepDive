import React from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onNext = (data) => {
    navigate("/resume/introduce");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "25vw" }}>
      <h3>경력 유무</h3>
      <label>
        <input
          type="radio"
          value="있음"
          name="history"
          {...register("gender", { required: "경력 여부를 선택하세요." })}
        ></input>
        있음
      </label>
      <label>
        <input
          type="radio"
          value="없음"
          name="history"
          {...register("gender", { required: "경력 여부를 선택하세요." })}
        ></input>
        없음
      </label>

      {errors.gender && <p style={{ color: "red" }}>{errors.gender.message}</p>}
      <br />
      <button type="submit" onClick={handleSubmit(onNext)}>
        다음
      </button>
    </div>
  );
}
