import React, { useState } from 'react'
import "./App.css";
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
const App = () => {
  const [cartIsShow,setCartIsShow]=useState()
  const showCartHandler =()=>{
    setCartIsShow(true)
  }
    const hideCartHandler = () => {
      setCartIsShow(false);
    };
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App
