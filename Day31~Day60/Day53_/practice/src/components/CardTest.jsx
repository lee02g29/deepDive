import React from "react";
import styles from '../scss/CardTest.module.scss'

export default function CardTest() {
  return (
    <div>
      {" "}
      <div className={styles.card}>
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className={styles[`card-${num}`]}>
            Box{num}
          </div>
        ))}
      </div>
    </div>
  );
}
