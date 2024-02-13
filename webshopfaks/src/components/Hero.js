import React from 'react'
import '../styles/Hero.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import star from '../images/star.png'
import starFilled from '../images/star-filled.png'



const Hero = ({items}) => {

  const popularItems = items.filter(item => item.popular);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className="hero">
        <hr className='hero-line'></hr>
        <h1 className='hero-headline'>Popular models</h1>
        <div className='hero-container'>
        <Slider {...settings}>
        {popularItems.map(item =>(
          <li key={item.id} className='hero-component'>
                <h2 className='hero-componentHeadline'>{item.name}</h2>
                <div className='hero-stars'><img src={starFilled} className='hero-star'/> <img src={starFilled} className='hero-star'/><img src={starFilled} className='hero-star'/><img src={starFilled} className='hero-star'/><img src={star} className='hero-star'/><p className='hero rating'>(16)</p></div>
                <img src={item.image} className='hero-image'alt='1'/>
                <Link to={`/shirt/${item.id}`}>
                <button className='hero-button'>Buy now</button>
                </Link>
                <div className='hero-price'>${item.price}</div>
                </li>
                ))}
                </Slider>
            </div>



    </div>
  )
}

export default Hero