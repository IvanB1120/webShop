import React from 'react'
import '../styles/Footer.css'
import img1 from '../images/iconFacebook.png'
import img2 from '../images/iconInstagram.png'
import img3 from '../images/iconTwitter.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left-container'>
            <h2 className='footer-headline'>T-Shirt shop</h2>
            <div className='footer-icon-container'>
                <img src={img1} className='footer-icon' alt='1'/>
                <img src={img2} className='footer-icon' alt='1'/>
                <img src={img3} className='footer-icon' alt='1'/>
            </div>
        </div>
        <div className='footer-right-container'>
            <p className='footer-text'>Settings</p>
            <p className='footer-text'>Terms and Conditions</p>
            <p className='footer-text'>Privacy Policy</p>
            <p className='footer-text'>Cookie setting</p>
        </div>
    </div>
  )
}

export default Footer