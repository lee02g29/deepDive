import React from "react";
import Carousel from "./carousel";
import Breadcrumbs from "./Breadcrumbs";
import "../css/Recommend.css";

export default function Recommend() {
  return (
    <div className="recommend">
      <div className="breadcrumbs__container">
        <Breadcrumbs className="breadcrumb" />
      </div>
      <h4 className="recommend__title">추천상품</h4>
      <Carousel />
    </div>
  );
}
