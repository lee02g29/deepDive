import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import  Select  from "react-select";

// 선택 옵션 배열
const deptOptions = [
  { label: "개발", value: "dev" },
  { label: "디자인", value: "design" },
  { label: "기획", value: "plan" },
];

export default function Department() {
  const { control } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-bold">희망 부서</h2>
      <Controller
        name="department"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={deptOptions}
            isClearable
            placeholder="부서 선택"
          />
        )}
      ></Controller>
    </div>
  );
}
