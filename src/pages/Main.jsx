import React from "react";

import Card from '../components/Card/Card'

export default function Main({ onAddToFavorite, database, searchCart, onAddToCart, onChangeInputSearch }) {
  return (
		<>
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
                onAddToFavorite={onAddToFavorite}
                addToCart={(card) => onAddToCart(card)} 
                name={card.name} 
                price={card.price} 
                img={card.image} 
                id={card.id}
              />
            )) 
          }
        </div>
      </div> 
		</>	
  )
}