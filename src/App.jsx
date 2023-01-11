import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

import axios from "axios";

import Favorite from "./pages/Favorite/Favorite";
import Main from "./pages/Main/Main"

import Header from './components/Header/Header';
import Drawer from "./components/Drawer/Drawer";

function App() {
  const [database, setDatabase] = useState([])
  const [cart, setCart] = useState([])
  const [searchCart, setSearchCart] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [cartFavorite, setCartFavorite] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/sneakers')
      .then(response => setDatabase(response.data))

    axios.get('http://localhost:3001/cart')
      .then(response => setCart(response.data))
      
    axios.get('http://localhost:3001/favorite')
      .then(response => setCartFavorite(response.data))  

  }, [])

  const onAddToCart = (obj) => {
    axios.post('http://localhost:3001/cart', obj)
    setCart(prev => [...prev, obj])
  }
 
  const onAddToFavorite = async (obj) => {
    try {
      if (cartFavorite.find((objFav) => objFav.id === obj.id)) {
        axios.delete(`http://localhost:3001/favorite/${obj.id}`)
      } else {
        const { data } = await axios.post('http://localhost:3001/favorite', obj)
        setCartFavorite(prev => [...prev, data])
      }
    } catch (e) {
      console.log('Произошла ошибка', e)
    }
  } 

  const onRemoveCart = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`)
    setCart(prev => prev.filter(cart => cart.id !== id))
  }

  const onChangeInputSearch = (event) => {
    setSearchCart(event.target.value)
  }

  return (
    <div className="wrapper clear">
      <Header onClickOpen={() => setDrawerOpen(true)}/>
			{ drawerOpen && <Drawer cart={cart} onRemove={onRemoveCart} onClickClose={() => setDrawerOpen(false)} /> }
      <Routes>
        <Route path="/" element={<Main onAddToFavorite={onAddToFavorite} database={database} searchCart={searchCart} onAddToCart={onAddToCart} onChangeInputSearch={onChangeInputSearch} />} />
        <Route path="/favorite" element={<Favorite cartFavorite={cartFavorite} />} />
      </Routes>
    </div>
  );
}

export default App;
