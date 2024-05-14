import React from 'react';
import Slider from 'react-slick';
import '../styles/Main.css';
import { Link } from 'react-router-dom';
import mainImageOne from '../images/05.jpg';
import mainImageTwo from '../images/001.jpg';
import mainImageThree from '../images/proba1.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
  </div>
);


const Main = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
      <div className="full-screen-image">
        <img src={mainImageThree} alt="Full-Screen-image" />
        <Link to="/shirtMenu">
        <button className='main-button'>Explore T-shirts</button>
        </Link>
      </div>
      <div className="full-screen-image">
        <img src={mainImageTwo} alt="Full Screen" />
        <Link to="/hoodieMenu">
        <button className='main-button'>Explore Hoodies</button>
        </Link>
      </div>
      </Slider>
  )
}

export default Main