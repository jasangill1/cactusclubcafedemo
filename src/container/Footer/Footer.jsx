import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer p__cormorant">
      <div className="footer__content">
        <div className="footer__column">
          <h4>About Us</h4>
          <p className='p__opensans'>
          Originating from the West Coast and expanding throughout Canada,
           our establishment presents exceptional global cuisine crafted with locally-sourced, 
          fresh ingredients.
          </p>
        </div>
        <div className="footer__column ">
          <h4>Quick Links</h4>
          <ul className=' "p__opensans no-list-style-centered p__opensans'>
            <li><a href="/">Home</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">About Us</a></li>
          </ul>
        </div>
        <div className="footer__column p__opensans">
          <h4>Contact Info</h4>
          <p>12345 UBC Drive, V4G 1G1 Earth,MW</p>
          <p>+1 (604) 123-4567</p>
          <p>Batman@gmail.com</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Jasan Gill. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
