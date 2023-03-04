import axios from "axios"
import React, { useEffect, useState } from "react"

import Card from "../Card/Card"

import { Link } from "react-router-dom"

import styles from '../../pages/Favorite/Favorite.module.scss'

export default function Orders() {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get('http://localhost:3001/orders')
  
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false)
      })()
    } catch (e) {
      console.log(e)
    }
    
  }, [])

  return (
    <div className="Favorite">
			<div className="content p-40">
				<div className="d-flex align-center mb-40 justify-between">
          <h1>Мои заказы</h1>
        </div>
        <div className={`d-flex flex-wrap ${orders.length > 0 ? '' : 'justify-center'}`}>
          { orders.length > 0 ? 
            (isLoading ? [...Array(10)] : orders).map((card, index) => <Card 
              key={index}
              loading={isLoading}
              {...card} />
            )
            : 
            <div className={styles.favoriteEmpty}>
              <img src="/img/empty-favorite.svg" alt="" />
              <h3>Покупок нет :(</h3>
              <p>Вы ничего не купили</p>
              <Link to="/"><button className={`${styles.greenButton} ${styles.greenButtonEmptyCart}`}>Вернуться назад</button></Link>
            </div>
          }
        </div>
			</div>
		</div>
  )
}