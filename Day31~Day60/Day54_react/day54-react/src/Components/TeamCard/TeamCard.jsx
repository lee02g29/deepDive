import React from "react";
import styles from "./TeamCard.module.scss";

export default function TeamCard({ name, role, image, status }) {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={image} alt={`${name}의 프로필`}></img>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.level}>{status}</p>
    </div>
  );
}
