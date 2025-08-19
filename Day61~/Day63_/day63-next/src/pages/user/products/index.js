// 미리 데이터를 가져와서 볼 수 있도록 빌드 타임

import ProductCard from "@/components/user/ProductCard";
import products from "@/data/products";
import React from "react";

export default function index() {
  return (
    <div>
      <h1 className="text-2xl font-bold">제품 목록</h1>
      <div className="grid grid-cols-2 sm:gird-cols lg:grid-cols-3 gap-4">
        {" "}
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}

/* 
  빌드 타임(build time)
  - next에서 페이지를 미리 만드는 시점
  - npm run build할 때(프로젝트 배포 전에 컴파일 / 정적 파일을 실행하는 시점)
  - html과 json 데이터를 미리 생성하는 순간
*/
