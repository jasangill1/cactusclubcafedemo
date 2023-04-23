import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import images from '../../constants/images';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar__logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#awards">Awards</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar__login">
        <a href="#login">Login / Register</a>
        <a href="/" className="book-table">Book Table</a>
      </div>
      <div className="app__navbar__smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center side-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#awards">Awards</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
