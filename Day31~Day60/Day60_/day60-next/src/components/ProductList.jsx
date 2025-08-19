import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => {
        // console.log(res)

        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setProductList(data.data || []);
      });
  }, []);

  return (
    <div>
      {" "}
      <ul>
        {productList.map((product) => (
          <li key={product._id} className="border-1 m-1 p-4">
            <h3 className="text-xl font-semibold text-center">
              {product.title ?? "이름 없음"}
            </h3>
            <p className="text-xl text-center">
              {product.price ?? "-"}원
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
