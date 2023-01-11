import React from "react";

import styles from './Drawer.module.scss'

export default function Drawer({onClickClose, onRemove, cart}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerHeader}>
          <h2 className="mb-30 d-flex justify-between">Корзина <button onClick={onClickClose}><img className={`${styles.removeBtn} cu-p`} src="/img/btn-remove.svg" alt="" /></button></h2>  
        </div>

        {cart.length > 0 ? (
          <>
            <div className={styles.items}>
              { cart.map(itemCart => {
                return (
                  <div className={`${styles.cartItem} d-flex align-center mb-20`}>
                    <div style={{ backgroundImage: `url(${itemCart.img})` }} className={styles.cartItemImage}></div>
                      <div className="mr-20 flex">
                        <p className="mb-5">{itemCart.name}</p>
                        <b>{itemCart.price} руб.</b>
                      </div>
                    <img onClick={() => onRemove(itemCart.id)} className={styles.removeBtn} src="/img/btn-remove.svg" alt="" />
                  </div>
                )
              }) }
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
          </>
        ) : (
          <>
            <div className={styles.cartEmpty}>
              <img src="/img/cart.svg" alt="" />
              <h3>Корзина пустая</h3>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
              <button onClick={onClickClose} className={`${styles.greenButton} ${styles.greenButtonEmptyCart}`}>Вернуться назад</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}