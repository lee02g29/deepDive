import React from "react";
import { useProductContext } from "../contexts/ProductProvider";
import ProductBucket from "./ProductBucket";
import { useState } from "react";

export default function ProductDetail() {
  const { name, price, discount, showBucket, setShowBucket} = useProductContext();
  

  if (showBucket) {
    return <ProductBucket />;
  }
  return (
    <div>
      <h1>상품 정보</h1>

      <h2>{name}</h2>
      <span>
        {discount}% {price}원
      </span>

      <button
        onClick={() => {
          setShowBucket(true);
        }}
      >
        구매하기
      </button>
    </div>
  );
}
