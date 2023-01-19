import React from "react";

import Card from '../../components/Card/Card'

export default function Main({ isLoading, onAddToFavorite, database, searchCart, onAddToCart, onChangeInputSearch }) {
  const renderItems = () => {
    const filteredItems = database.filter(card => card.name.toLowerCase().includes(searchCart.toLowerCase()))
    return (isLoading ? [...Array(10)] : filteredItems).map((card, index) => (
      <Card 
        key={index}
        onAddToFavorite={onAddToFavorite}
        addToCart={(card) => onAddToCart(card)} 
        loading={isLoading}
        {...card}
      />
    )) 
  }
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
          { renderItems() }
        </div>
      </div> 
		</>	
  )
}