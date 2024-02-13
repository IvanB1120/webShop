import React, { useEffect, useState } from 'react'
import '../styles/menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setShowMenu(scrollY >= 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div>
        {showMenu &&(
        <div class="outer-menu">
        <input
          className="checkbox-toggle"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
  <div class="hamburger">
    <div></div>
  </div>
  <div class="menu">
    <div>
      <div>
        <ul>
          <li><p className='nav-text'><Link to="/" className="nav-link" onClick={handleToggle}>Home</Link></p></li>
          <li><p className='nav-text'><Link to="/shirtMenu" className="nav-link" onClick={handleToggle}>T-Shirts</Link></p></li>
          <li><p className='nav-text'><Link to="/jerseyMenu" className="nav-link" onClick={handleToggle}>Jersey</Link></p></li>
          <li><p className='nav-text'><Link to="/hoodieMenu" className="nav-link" onClick={handleToggle}>Hoodie</Link></p></li>
          <li><p className='nav-text'><Link to="/cart" className="nav-link" onClick={handleToggle}>Cart</Link></p></li>
          <li><p className='nav-text'><Link to="/shirtMenu" className="nav-link" onClick={handleToggle}>Login</Link></p></li>
        </ul>
      </div>
    </div>
  </div>
</div>
)}
    </div>
  )
}

export default Menu