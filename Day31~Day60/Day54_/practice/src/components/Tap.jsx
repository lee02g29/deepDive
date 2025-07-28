import React, { useState } from "react";
import "../styles/Tap.scss";
import clsx from "clsx";

export default function Tap() {
  const menus = ["Home", "Profile", "Settings"];
  const [selected, setSelected] = useState("Home");

  return (
    <div className="tab">
      {menus.map((menu) => (
        <p
          onClick={() => setSelected(menu)}
          className={clsx("tab-btn", selected === menu && "tab-active")}
        >
          {menu}
        </p>
      ))}
    </div>
  );
}
