import clsx from "clsx";
import React, { useState } from "react";
import '../styles/Checkbox.scss'

export default function Checkbox() {
  const items = ["Apple", "Banana", "Orange"];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckbox = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div>
      {items.map((item) => (
        <label key={item} 
          className={clsx('checkbox', selectedItems.includes(item) && 'checked-item')}
        >
          <input type="checkbox" onChange={() => handleCheckbox(item)} />
          {item}
        </label>
      ))}
    </div>
  );
}
