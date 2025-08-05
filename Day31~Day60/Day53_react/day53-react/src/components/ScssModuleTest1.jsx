import React, { useState } from "react";
import styles from "../scss/ScssModuleTest1.module.scss";

export default function ScssModuleTest1() {
  const [isActive, setIsActive] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState("홈");

  const className = darkMode ? `${styles.card} ${styles.dark}` : styles.card;

  return (
    <div>
      <h3>Active 예제</h3>
      <div className={`${styles.box} ${isActive ? styles.active : ""}`}>
        {isActive ? "활성 상태" : "비활성 상태"}
      </div>

      <h3>다크 모드 선택 예제</h3>
      <div className={className}>
        {darkMode ? "다크 모드 활성" : " 다크 모드 비활성"}
      </div>

      <h3>선택된 항목 selected 예제</h3>
      <div className={styles.tab}>
        <button className={styles.selected}>{selectedTab}</button>
      </div>
    </div>
  );
}
