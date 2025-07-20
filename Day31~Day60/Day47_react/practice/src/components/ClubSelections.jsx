import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

const clubOptions = [
  { value: "축구 동아리", label: "축구 동아리" },
  { value: "야구 동아리", label: "야구 동아리" },
  { value: "헬스 동아리", label: "헬스 동아리" },
  { value: "독서 토론 동아리", label: "독서 토론 동아리" },
  { value: "방과후 공부 동아리", label: "방과후 공부 동아리" },
];

export default function ClubSelections() {
  const { register, control } = useFormContext();

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
      <h2>희망 동아리</h2>

      <label>동아리 선택</label>
      <Controller
        name="club"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={clubOptions}
            placeholder="가입하려는 동아리를 선택하세요"
            isClearable
          />
        )}
      />

      <div style={{ display: "flex",
        flexDirection: "column" }}>
        <label>부가 활동</label>
        <label>
          <input type="checkbox" {...register("volnteer")} />
          자원봉사
        </label>
        <label>
          <input type="checkbox" {...register("study")} />
          스터디
        </label>
        <label>
          <input type="checkbox" {...register("health")} />
          운동
        </label>
      </div>
    </div>
  );
}
