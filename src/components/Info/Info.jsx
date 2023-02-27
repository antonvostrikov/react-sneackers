import React from "react"

import styles from './Info.module.scss'

export default function Info({ onClickClose, header, description, image }) {
  return (
    <div className={styles.cartEmpty}>
      <img src={image} alt="" />
      <h3>{header}</h3>
      <p>{description}</p>
      <button onClick={onClickClose} className={`${styles.greenButton} ${styles.greenButtonEmptyCart}`}>Вернуться назад</button>
    </div>
  )
}