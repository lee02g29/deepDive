import React from "react";
import RadioButton from "./RadioButton";
import "../css/Banner.css";

export default function Banner() {
  const menus = [
    {
      id: 1,
      name: "음료",
      value: '1',
      link: "#",
    },
    {
      id: 2,
      name: "푸드",
      value: '2',
      link: "#",
    },
    {
      id: 3,
      name: "MD",
      value: '3',
      link: "#",
    },
  ];

  return (
    <div className="banner">
      <h1 className="banner__font">베이커리</h1>
      <span className="banner__font banner_info">
        ALWAYS BESIDE YOU, <strong>EDIYA BAKERY</strong>
      </span>
      <RadioButton radios={menus}/>
    </div>
  );
}
