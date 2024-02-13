import React from 'react'
import Main from "../components/Main";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"

const Home = ({items, cartItems}) => {
  return (
    <>
    <NavBar/>
        <Main />
        <Hero items={items}/>
        <Footer />
    </>
  )
}

export default Home