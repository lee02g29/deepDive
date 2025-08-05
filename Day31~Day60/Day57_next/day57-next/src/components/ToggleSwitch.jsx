"use client";

import React, { useState } from "react";
import style from "@/components/ToggleSwitch.module.css";

export default function ToggleSwitch() {
  const [on, setOn] = useState(false);

  return (
    <div className={`${style.button} ${on ? style.on : style.off}`}  onClick={() => setOn(!on)}>
      {on ? "켜짐(on)" : "꺼짐(off)"}
    </div>
  );
}
