import React from "react";
import { useFormContext } from "react-hook-form";

export default function ProductInfo({ next }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <h2 className="text-xl text-bold">제품 이름 및 가격 설정</h2>
      <input
        {...register("name", { required: "제품명은 필수입니다." })}
        placeholder="이름"
        style={{ width: "30vw" }}
      ></input>

      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      <input
        {...register("price", {
          required: "가격은 필수입니다.",
          valueAsNumber: true,
        })}
        type="number"
        placeholder="가격"
        style={{ width: "30vw" }}
      ></input>

      {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}

      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        marginBottom: "10px",
      }}>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => next(["name", "price"])}
        >
          다음
        </button>
      </div>
    </div>
  );
}
