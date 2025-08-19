import Link from "next/link";
import React from "react";

export default function ProuductCard({ product }) {
  const price = Math.floor(
    product.originalPrice * (1 - product.discountRate / 100)
  );
  const formattedPrice = price.toLocaleString("ko-KR");

  return (
    <Link href={`/product/${product.productId}`}>
      <div className="w-[400px] p-2 rounded-md">
        <div className="h-[200px] bg-gray-300 flex items-center justify-center overflow-hidden rounded-lg">
          <span className="text-black">미리보기</span>
        </div>
        <h1 className="text-sm text-gray-400">{product.brand}</h1>
        <p className="text-lg">{product.title}</p>
        <p className="font-semibold text-lg">
          <span className="font-semibold text-blue-400">
            {product.discountRate}%{" "}
          </span>
          {formattedPrice}
        </p>
      </div>
    </Link>
  );
}
