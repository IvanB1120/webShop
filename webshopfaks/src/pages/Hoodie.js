import React, { useState, useEffect } from "react";
import NavBar from '../components/NavBar';
import img7 from "../images/backgroundImage.jpeg";
import "../styles/Shirt.css";
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import Hero from '../components/Hero';
import downIcon from '../images/downIcon.png'
import { Link } from 'react-router-dom';


const Hoodie = ({ items, setItems, cartItems, setCartItems }) => {

  const { itemId } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false)
  const [selectedColor, setSelectedColor] = useState("black");

  const notify = () => {
    <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
/>

toast.error('Item already in cart!', {
  position:"bottom-center",
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  hideProgressBar: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });
  }

  const addedToCartNotify = () =>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
      timer: 1500
    });
  }

  useEffect(() => {
    const foundItem = items.find(item => item.id === itemId);
    setSelectedItem(foundItem);
  }, [items, itemId]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleAddToCart = () => {
    const itemExists = cartItems.some(item => item.id === selectedItem.id && item.size === selectedSize);

    if (itemExists) {
      console.warn("Item already in the cart!");
      notify();
      return ;
    }
    const newItem = { ...selectedItem, amount: 1, size: selectedSize, text: text };
    addedToCartNotify();
    setCartItems(prevCartItems => [...prevCartItems, newItem]);
  };

  if (!selectedItem) {
    return <div>Item not found</div>;
  }
  const onClickDescription = () => {
    setShowText(prevShowText => ! prevShowText)
  }
  const onClickDescription1 = () => {
    setShowText1(prevShowText => ! prevShowText)
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };


  return (
    <div style={{ backgroundImage: `url(${img7})` }}>
      <NavBar cartItems={cartItems} />
      <div className='shirt-container'>
      <div className="shirt-image-container">
        <img className='shirt-image' src={selectedItem.image} alt={selectedItem.name} />
        <p className="shirt-caption" style={{ color: selectedColor }}>
          {text}
        </p>
        </div>
        <div className='shirt-text-container'>
          <h1 className='shirt-headline'>{selectedItem.name}</h1>
          <h1 className='shirt-headline'>{selectedItem.price}$</h1>
          <label htmlFor="size" className='shirt-size-text'>Size:</label>
          <select
            id="size"
            name="size"
            onChange={(e) => handleSizeChange(e.target.value)}
            value={selectedSize}
            className="select-size"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <label htmlFor="text" className='shirt-text-text'>Text:</label>
          <div className="color-buttons-container">
            <button
              className="color-button black-button"
              onClick={() => handleColorChange("black")}
            >
            </button>
            <button
              className="color-button white-button"
              onClick={() => handleColorChange("white")}
            >
            </button>
            <button
              className="color-button blue-button"
              onClick={() => handleColorChange("blue")}
            >
            </button>
            <button
              className="color-button yellow-button"
              onClick={() => handleColorChange("yellow")}
            >
            </button>
            <button
              className="color-button red-button"
              onClick={() => handleColorChange("red")}
            >
            </button>
        </div>
          <input
            type="text"
            placeholder="Add your own text"
            className="select-text"
            name="text"
            value={text}
            onChange={(e) => handleTextChange(e.target.value)}
          />
          <button className="shirt-button" onClick={handleAddToCart}>
            Add to cart
          </button>
          <div className="shirt-description-container">
            <h2 className="shirt-description-headline">Description</h2>
            <button className="shirt-dropdown" onClick={onClickDescription}><img src={downIcon} className="down-icon" alt=""/></button>
          </div>
          {showText ? <div className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum tempus dui, 
    sit amet euismod quam interdum tincidunt. 
    Nunc quis libero porta, aliquet risus vitae, euismod nisl. Nam tortor lacus, dapibus a congue quis, 
    feugiat id felis. Donec pulvinar sapien est, faucibus fringilla diam consequat at. Duis sit amet sem velit.</div>: null}
          <hr className='shirt-line'></hr>
          <div className="shirt-description-container">
            <h2 className="shirt-description-headline">Material and care instruction</h2>
            <button className="shirt-dropdown" onClick={onClickDescription1}><img src={downIcon} className="down-icon" alt=""/></button>
          </div>
          {showText1 ? <div className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum tempus dui, 
    sit amet euismod quam interdum tincidunt. 
    Nunc quis libero porta, aliquet risus vitae, euismod nisl. Nam tortor lacus, dapibus a congue quis, 
    feugiat id felis. Donec pulvinar sapien est, faucibus fringilla diam consequat at. Duis sit amet sem velit.</div> : null}
          <hr className='shirt-line'></hr>
          <Link to='/hoodieMenu'>
          <button className="shirt-button1">Return back</button>
          </Link>
        </div>
      </div>
      <div className="shirt-hero-container">
      <ToastContainer />
      <Hero items={items}/>
      </div>
      <Footer />
    </div>
  )
}

export default Hoodie