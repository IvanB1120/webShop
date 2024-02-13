import React, { useEffect, useState } from 'react';
import "../styles/NavBar.css";
import { Link, useLocation } from 'react-router-dom';
import Menu from './Menu';

const NavBar = ({ cartItems }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const isHome = activeLink === '/';

  return (
    <nav>
  <div className={`${isHome ? 'home-page' : 'other-page'}`}>
    <div className='link-container'>
      <Link to="/" className="nav-link">Home</Link>
    </div>
    <div className='link-container1'>
        <Link to="/shirtMenu" className="nav-link">T-Shirts</Link>
      </div>
      <div className='link-container1'>
        <Link to="/jerseyMenu" className="nav-link">Jersey</Link>
      </div>
      <div className='link-container1'>
        <Link to="/hoodieMenu" className="nav-link">Hoodie</Link>
      </div>
    <div className='link-container1'>
      <Link to="/cart" className="nav-link">Cart</Link>
    </div>
    {isHome ? null : <button className='nav-login-button'>Login</button>}
  </div>
  {isHome ? (<button className='nav-login-button-home'>Login</button>) : null}
  
  <Menu />

</nav>
  );
}

export default NavBar;
