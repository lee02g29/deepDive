import React from "react";
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

const categoryOptions = [
  {
    label: "전자기기",
    value: "전자기기",
  },
  {
    label: "의류/패션",
    value: "의류/패션",
  },
  {
    label: "생활용품",
    value: "생활용품",
  },
  {
    label: "가구/인테리어",
    value: "가구/인테리어",
  },
  {
    label: "도서/문구",
    value: "도서/문구",
  },
  {
    label: "뷰티/헬스",
    value: "뷰티/헬스",
  },
];

export default function CategoryImage({ prev, next }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "55vh",
        marginBottom: "10px",
        marginLeft: "10px",
      }}
    >
      <h2>제품 분류 설정</h2>

      <label>분류 선택</label>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            {...register("category", { required: "분류는 필수입니다." })}
            options={categoryOptions}
            placeholder="제품의 분류를 선택해주세요."
            isClearable
            value={field.value}
            onChange={field.onChange}
            className="swiper-no-swiping"
            // menuPortalTarget={document.body}
            // styles={{
            //   menuPortal: (base) => ({
            //     ...base,
            //     zIndex: 9999, // 항상 위에 떠 있도록 설정
            //   }),
            // }}
          />
        )}
      />
      {errors.category && (
        <p style={{ color: "red" }}>{errors.category.message}</p>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <button
          type="button"
          onClick={prev}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          이전
        </button>

        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => next(["category", "white"])}
        >
          다음
        </button>
      </div>
    </div>
  );
}
