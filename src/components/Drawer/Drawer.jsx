import React from "react";
import { useState } from "react";
import Info from "../Info/Info";

import styles from './Drawer.module.scss'

import axios from "axios";

import { AppContext } from "../../context";

import { useTotal } from "../../hooks/useTotal";

export default function Drawer({ onClickClose, onRemove }) {
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const { cart, setCart } = React.useContext(AppContext)
  const { total, tax } = useTotal()

  const orderCompleteClick = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/orders', {items: cart})
      setOrderId(data.id)
      setOrderComplete(true)
      setCart([])
    } catch (e) {
      alert('Не удалось оформить заказ :(')
      console.log(e)
    }
  } 

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
                    <div style={{ backgroundImage: `url(${itemCart.image})` }} className={styles.cartItemImage}></div>
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
                  <b>{total} руб.</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{tax} руб.</b>
                </li>
              </ul>
              <button className={styles.greenButton} onClick={orderCompleteClick}>Оформить заказ <img src="/img/arrow-right.svg" alt="" /></button>
            </div> 
          </>
        ) : (
          <>
            <Info 
              onClickClose={onClickClose} 
              header={orderComplete ? 'Заказ оформлен' : 'Коризина пустая'} 
              description={orderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'} 
              image={orderComplete ? '/img/order.svg' : '/img/cart.svg'}
            /> 
          </>
        )}
      </div>
    </div>
  )
}