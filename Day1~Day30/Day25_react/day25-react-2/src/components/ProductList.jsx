import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/LeeSeohee2/github-page/refs/heads/main/products_with_images.json"
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <h1>제품 리스트</h1>
        {data.map((prod, index) => (
          <Link to={`/prod/${index}` } key={index}>
            <img src={prod.image}></img>
            <h2>{prod.name}</h2>
          </Link>
        ))}
    </div>
  );
}
