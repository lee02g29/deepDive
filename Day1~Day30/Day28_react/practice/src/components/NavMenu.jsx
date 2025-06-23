import React from "react";
import "../css/navMenu.css";
import NavButton from "./NavButton";

export default function NavMenu({ item }) {
  return (
    <div id="menu">
      <article className="menu__info">
        <span>{item.title}</span>
        <p>{item.desc}</p>
      </article>
      <aside>
        <NavButton />
      </aside>
    </div>
  );
}
