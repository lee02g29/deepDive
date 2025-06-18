import React from "react";
import NavMenu from "../components/NavMenu";
import NavInfo from "../components/NavInfo";
import "../css/navigation.css";

export default function Navigation() {
  const menu = [
    {
      title: "Dine by Design",
      desc: 'From a candlelit dinner on a cliffside pavilion to a starlit beach picnic surrounded by torches, our "Dine by Design" experience.',
    },
    {
      title: "Local Living Encounters",
      desc: "Step into the daily life of a local village, learn the art of traditional weaving, or harvest spices alongside a farmer in the morning sun.",
    },
    {
      title: "Sunrise Awakening Rituals",
      desc: "Begin your morning with guided yoga on a cliff overlooking the sea, followed by a nourishing herbal elixir.",
    },
  ];
  return (
    <div className="navigation">
      <NavInfo />
      {menu.map((item) => <NavMenu item={item}/>)}
    </div>
  );
}
