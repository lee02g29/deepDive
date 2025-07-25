import React from "react";
import styles from '../scss/EachTest.module.scss'

export default function EachTest() {
  return (
    <div>
      {" "}
      <div>
        <h1 className={styles["heading-h1"]}>제목 1</h1>
        <h2 className={styles["heading-h2"]}>제목 2</h2>
        <h3 className={styles["heading-h3"]}>제목 3</h3>
      </div>
    </div>
  );
}
