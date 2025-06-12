import React from "react";
import Menu from "./Menu.jsx";
import "../css/Carousel.css"

export default function Carousel() {
  const menus = [
    {
      id: 1,
      name: "수플레 치즈 케이크",
      src: "https://ediya.com/files/menu/IMG_1717115058488.png",
      isBest: true,
    },
    {
      id: 2,
      name: "초코 케이크",
      src: "https://www.ediya.com/files/menu/IMG_1717115080162.png",
      isBest: true,
    },
    {
      id: 3,
      name: "달고나 라떼",
      src: "https://ediya.com/files/menu/IMG_1647321929656.png",
      isBest: true,
    },
  ];

  return (
    <div className="carousel">
      {menus.map((menu) => (
        <Menu menu={menu}/>
      ))} 
    </div>
  );
}
