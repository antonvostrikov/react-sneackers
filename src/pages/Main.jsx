import React from "react";
import { useEffect, useState } from "react"; 
import axios from "axios";

import Card from '../components/Card/Card'
import Drawer from "../components/Drawer/Drawer";

export default function Main({ setDrawerOpen, drawerOpen }) {
	const [database, setDatabase] = useState([])
  const [cart, setCart] = useState([])
  const [searchCart, setSearchCart] = useState('')

  useEffect(() => {
    axios.get('https://638350401ada9475c8fc93e6.mockapi.io/items')
      .then(response => setDatabase(response.data))

    axios.get('https://638350401ada9475c8fc93e6.mockapi.io/cart')
      .then(response => setCart(response.data))  
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://638350401ada9475c8fc93e6.mockapi.io/cart', obj)
    console.log(obj)
    setCart(prev => [...prev, obj])
  }
 
  const onRemoveCart = (id) => {
    axios.delete(`https://638350401ada9475c8fc93e6.mockapi.io/cart/${id}`)
    
    setCart(prev => prev.filter(cart => cart.id !== id))
  }

  const onChangeInputSearch = (event) => {
    setSearchCart(event.target.value)
  }

  return (
		<>
			{ drawerOpen && <Drawer cart={cart} onRemove={onRemoveCart} onClickClose={() => setDrawerOpen(false)} /> }
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onChangeInputSearch} type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          { database
            .filter(card => card.name.toLowerCase().includes(searchCart.toLowerCase()))
            .map((card) => (
              <Card 
                key={card.id}
                id={card.id}
                addToCart={(obj) => onAddToCart(obj)} 
                name={card.name} 
                price={card.price} 
                img={card.image} 
              />
            )) 
          }
        </div>
      </div> 
		</>	
  )
}