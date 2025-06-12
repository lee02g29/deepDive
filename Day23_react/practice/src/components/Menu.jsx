import React from "react";
import "../css/Menu.css";

export default function Menu({ menu }) {
  return (
    <div className="menus">
      <div className="menu__image-container">
        {menu.isBest && (
          <div className="best__mark">
            <span className="best__title">Best</span>
          </div>
        )}
        <img className="menu__img" alt={menu.name} src={menu.src}></img>{" "}
      </div>
      <span className="menu__name">{menu.name}</span>
    </div>
  );
}
