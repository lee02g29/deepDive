import React from "react";
import { useFormContext } from "react-hook-form";

export default function StockOption({ prev, next }) {
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
      <h2 className="text-xl text-bold">제품 재고 수 및 색상 옵션 설정</h2>
      <label>재고 수 설정</label>
      <input
        {...register("stock", {
          required: "재고 수는 필수입니다.",
          valueAsNumber: true,
        })}
        type="number"
        placeholder="재고 수"
        style={{ width: "30vw" }}
      />

      {errors.stock && <p style={{ color: "red" }}>{errors.stock.message}</p>}

      <label>색상</label>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label>
          <input
            type="checkbox"
            value="white"
            {...register("colors", {
              validate: (value) =>
                (value && value.length > 0) || "색상을 하나 이상 선택하세요",
            })}
          />
          흰색
        </label>
        <label>
          <input type="checkbox" value="black" {...register("colors")} />
          검은색
        </label>
      </div>

      {errors.colors && <p style={{ color: "red" }}>{errors.colors.message}</p>}

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
          onClick={() => next(["stock", "colors"])}
        >
          다음
        </button>
      </div>
    </div>
  );
}
