import React from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Depart() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onNext = (data) => {
    navigate("/resume/history");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "25vw" }}>
      <h3>희망 부서</h3>
      <label>부서</label>
      <select {...register("depart", { required: "부서를 선택하세요." })}>
        <option value="">선택하세요</option>
        <option value="프론트엔드 개발팀">프론트엔드 개발팀</option>
        <option value="백엔드 개발팀">백엔드 개발팀</option>
        <option value="데브옵스 팀">데브옵스 팀</option>
        <option value="데이터 엔지니어링팀">데이터 엔지니어링팀</option>
      </select>

      {errors.depart && <p style={{ color: "red" }}>{errors.depart.message}</p>}
      <br />

      <button type="submit" onClick={handleSubmit(onNext)}>
        다음
      </button>
    </div>
  );
}
