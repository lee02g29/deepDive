import React from "react";
import { useProductStore } from "../stores/ProductStore";

export default function Preview({prev}) {
  const { formData } = useProductStore();
  return (
    <div>
      <h3>입력한 내용 미리 보기</h3>
      <p>상품명 : {formData?.name}</p>
      <p>
        가격:
        {formData?.price ? formData.price.toLocaleString("ko-KR") + " 원" : ""}
      </p>
      <p>분류 : {formData?.category?.value}</p>
      <p>재고 수 : {formData?.stock ? formData.stock.toLocaleString("ko-KR") + " 개" : ""}</p>
      <p>색상 : {Array.isArray(formData?.colors) ? formData.colors.join(", ") : ""} </p>

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
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          제출
        </button>
      </div>
    </div>
  );
}
