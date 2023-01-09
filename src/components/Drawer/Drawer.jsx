import React from "react";

import styles from './Drawer.module.scss'

export default function Drawer({onClickClose, onRemove, cart}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="mb-30 d-flex justify-between">Корзина <button onClick={onClickClose}><img className={`${styles.removeBtn} cu-p`} src="/img/btn-remove.svg" alt="" /></button></h2>  
        
        <div className={styles.items}>
          {cart.map(itemCart => {
            return (
              <div className={`${styles.cartItem} d-flex align-center mb-20`}>
                <div style={{ backgroundImage: `url(${itemCart.img})` }} className={styles.cartItemImage}></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{itemCart.name}</p>
                    <b>{itemCart.price} руб.</b>
                  </div>
                <b>{itemCart.id}</b>
                <img onClick={() => onRemove(itemCart.id)} className={styles.removeBtn} src="/img/btn-remove.svg" alt="" />
              </div>
            )
          })}
        </div>

        <div className={styles.cartTotalBlock}>
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.greenButton}>Оформить заказ <img src="/img/arrow-right.svg" alt="" /></button>
        </div> 
      </div>
    </div>
  )
}