import React from 'react'
import styles from '../scss/ButtonTest.module.scss'

export default function ButtonTest() {
  return (
    <div>
      <button className={styles.primary1}>small</button>
      <button className={styles.primary2}>medium</button>
      <button className={styles.primary3}>large</button>
    </div>
  )
}
