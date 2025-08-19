import React, { useEffect, useState } from "react";
import ProuductCard from "./ProuductCard";
import { useProductStore } from "@/store/productStore";

export default function ProductList() {

  const { setProducts, products: productList } = useProductStore();

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setProducts(data.data)
      });
  }, []);

  return (
    <div className="flex flex-row">
      {productList.map((product) => (
        <ProuductCard key={product._id} product={product}/>
      ))}
    </div>
  );
}
