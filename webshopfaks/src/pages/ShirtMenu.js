import React, { useState } from "react";
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';
import "../styles/ShirtMenu.css"
import Footer from "../components/Footer";
import star from '../images/star.png'
import starFilled from '../images/star-filled.png'

const ShirtMenu = ({ items , cartItems}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('AllPrice');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes('shirt') &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedColor === 'All' || item.name.toLowerCase().includes(selectedColor.toLowerCase())) &&
    (selectedPrice === 'AllPrice' || item.price >= parseInt(selectedPrice, 10))
  );

  return (
    <>
      <NavBar cartItems={cartItems} />
      <div className='all-container'>
        <div className='menu-container'>


          <div className="input-container">
            <input placeholder="Search" className="input-field" type="text" value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
            <label htmlFor="input-field" className="input-label">Search</label>
            <span className="input-highlight"></span>
          </div>



          <h2 className='menu-headline'>Color</h2>
          <div className='menu-color-buttons'>
            <div className='row-flex'>
              <input
                type="radio"
                id="All"
                name="colors"
                value="All"
                checked={selectedColor === 'All'}
                onChange={() => setSelectedColor('All')}
                className="input-colors"
              />
              <label htmlFor="All" className="input-text">All</label>
            </div>
            <div className='row-flex'>
              <input
                type="radio"
                id="White"
                name="colors"
                value="White"
                checked={selectedColor === 'White'}
                onChange={() => setSelectedColor('White')}
              />
              <label htmlFor="White" className="input-text">White</label>
            </div>
            <div className='row-flex'>
              <input
                type="radio"
                id="Black"
                name="colors"
                value="Black"
                checked={selectedColor === 'Black'}
                onChange={() => setSelectedColor('Black')}
              />
              <label htmlFor="Black" className="input-text">Black</label>
            </div>
            <div className='row-flex'>
              <input
                type="radio"
                id="Pink"
                name="colors"
                value="Pink"
                checked={selectedColor === 'Pink'}
                onChange={() => setSelectedColor('Pink')}
              />
              <label htmlFor="Pink" className="input-text">Pink</label>
            </div>
            <div className='row-flex'>
              <input
                type="radio"
                id="Green"
                name="colors"
                value="Green"
                checked={selectedColor === 'Green'}
                onChange={() => setSelectedColor('Green')}
              />
              <label htmlFor="Green" className="input-text">Green</label>
            </div>
          </div>

          <h2 className='menu-headline'>Price</h2>

          <div className='menu-color-buttons'>
            <div className='row-flex'>
              <input
                type="radio"
                id="AllPrice"
                name="price"
                value="AllPrice"
                checked={selectedPrice === 'AllPrice'}
                onChange={() => setSelectedPrice('AllPrice')}
              />
              <label htmlFor="AllPrice" className="input-text">All</label>
            </div>
            <div className='row-flex'>
              <input
                type="radio"
                id="20"
                name="price"
                value="20"
                checked={selectedPrice === '20'}
                onChange={() => setSelectedPrice('20')}
              />
              <label htmlFor="20" className="input-text">20+</label>
            </div>
            <div className='row-flex'>
              <input
                type="radio"
                id="30"
                name="price"
                value="30"
                checked={selectedPrice === '30'}
                onChange={() => setSelectedPrice('30')}
              />
              <label htmlFor="30" className="input-text">30+</label>
            </div>
          </div>
        </div>
        <hr className='menu-line'></hr>
        <div className='item-container'>
          {filteredItems.map(item => (
            <li key={item.id} className='item-component'>
              <h2 className='item-componentHeadline'>{item.name}</h2>
              <div className='hero-stars'><img src={starFilled} className='hero-star'/> <img src={starFilled} className='hero-star'/><img src={starFilled} className='hero-star'/><img src={starFilled} className='hero-star'/><img src={star} className='hero-star'/><p className='hero rating'>(16)</p></div>
              <img src={item.image} className='item-image' alt='1' />
              <Link to={`/shirt/${item.id}`}>
                <button className='item-button'>Customize</button>
              </Link>
              <div className='item-price'>${item.price}</div>
            </li>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ShirtMenu