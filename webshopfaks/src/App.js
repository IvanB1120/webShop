import React, { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Data from "./Data.js"
import ShirtMenu from "./pages/ShirtMenu";
import Shirt from "./pages/Shirt";
import JerseyMenu from "./pages/JerseyMenu";
import HoodieMenu from "./pages/HoodieMenu";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jersey from "./pages/Jersey";
import Hoodie from "./pages/Hoodie";
import './App.css'
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




function App() {

  const [items, setItems] = useState(Data)
  const [cartItems, setCartItems] = useState([]);

  
  const firebaseConfig = {
    apiKey: "AIzaSyBZRXOr3YiSyP9TMaZbTdmZY_lre4wMQ0w",
    authDomain: "webshop-74626.firebaseapp.com",
    projectId: "webshop-74626",
    storageBucket: "webshop-74626.appspot.com",
    messagingSenderId: "20032221542",
    appId: "1:20032221542:web:607e048f0df98d78a1d8a7",
    measurementId: "G-LS6YVHZBEV"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <Router>
      <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Home items={items} cartItems={cartItems}/>} />
        <Route
          path="/shirtMenu"
          element={<ShirtMenu items={items} cartItems={cartItems}/>} 
        />
        <Route
          path="/jerseyMenu"
          element={<JerseyMenu items={items} cartItems={cartItems}/>} 
        />
        <Route
          path="/hoodieMenu"
          element={<HoodieMenu items={items} cartItems={cartItems}/>} 
        />
        <Route
          path="/cart"
          element={<Cart items={items} cartItems={cartItems} setCartItems={setCartItems}/>} 
        />
        <Route
          path="/shirt/:itemId"
          element={<Shirt items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems}/>} 
        />
        <Route
          path="/jersey/:itemId"
          element={<Jersey items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems}/>} 
        />
        <Route
          path="/hoodie/:itemId"
          element={<Hoodie items={items} setItems={setItems} cartItems={cartItems} setCartItems={setCartItems}/>}
        />
        <Route path="/navbar" element={<NavBar cartItems={cartItems} />} />
        </Routes>
    </Router>
  );
}

export default App;


