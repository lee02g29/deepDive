import React from "react";

export default function ProductDetail({ product }) {
  const price = Math.floor(
    product.originalPrice * (1 - product.discountRate / 100)
  );
  const formattedPrice = price.toLocaleString("ko-KR");

  return (
    <div className="p-3">
      <h3 className="mb-2 font-semibold text-gray-500">{product.brand}</h3>
      <p className="mb-2 text-2xl font-semibold">{product.title}</p>
      <p className="mb-2 font-semibold text-blue-400">{product.reviewCount}개의 리뷰</p>

      <div className="mb-2">
        <p>
          {product.discountRate}% {' '}
          <span className="text-gray-300 line-through">{product.originalPrice.toLocaleString("ko-KR")}원</span>
        </p>
        <span className="text-4xl font-bold">{formattedPrice}원</span>
      </div>

      <div className="flex gap-2 mb-2">
        <h3 className="text-gray-500">배송</h3>
        <p>{product.delivery}</p>
      </div>

      <p className="mb-2 font-semibold text-blue-400">{product.arrivalDate}{' '}<span className="text-gray-700">도착 예정</span></p>
    </div>
  );
}
