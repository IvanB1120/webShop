import React from 'react'
import NavBar from '../components/NavBar'
import img7 from "../images/backgroundImage.jpeg"
import CartComponent from "../components/CartComponent.js"
import Footer from '../components/Footer'

const Cart = ({items, cartItems, setCartItems}) => {
  return (
    <div style={{ backgroundImage: `url(${img7})` }}>
        <NavBar cartItems={cartItems} />
        <CartComponent items={items} cartItems={cartItems} setCartItems={setCartItems}/>
        <Footer />
    </div>
  )
}

export default Cart