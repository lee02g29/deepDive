import React from 'react'
import styles from '../scss/ScssTest3.module.scss'

export default function ScssTest3() {
  return (
    <div className={styles.wrapper}>
      <h1>SCSS Mixin Ex</h1>
      <button className={`${styles.btn} ${styles.primary}`}>기본 버튼</button>
      <button className={`${styles.btn} ${styles.danger}`}>경고 버튼</button>
    </div>
  )
}
