import React from "react";
import { useState } from "react";
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import "../css/RadioButton.css"

export default function RadioButton({ radios }) {
  const [radioValue, setRadioValue] = useState("2");

  return (
    <ButtonGroup>
      {radios.map((radio) => (
        <ToggleButton
          key={radio.id}
          id={`radio-${radio.id}`}
          type="radio"
          name="radio"
          link={radio.link}
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
          className="radio-button"
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}
