import React from "react";
import { useProductContext } from "../contexts/ProductProvider";

export default function ProductBucket() {
  const { name, price, discount, setShowBucket } = useProductContext();
  let discountPrice = Math.floor(Number(price) * Number(discount / 100));

  return (
    <div>
      <h2>장바구니</h2>

      <div>
        <h3>{name}</h3>
        <button
          onClick={() => {
            setShowBucket(false);
          }}
        >
          돌아가기
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>결제 금액</h2>
        <span>상품 금액 : {price}원</span>

        <span>
          상품 할인 금액 : {discountPrice}원 ({discount}% 할인)
        </span>

        <span>배송비 : {0}원</span>

        <span>결제 예정금액 : {Number(price) - Number(discountPrice)}원</span>
      </div>
    </div>
  );
}
