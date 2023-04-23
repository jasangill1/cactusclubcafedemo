import React from 'react';
import {images} from "../../constants";
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app_header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
        <SubHeading title="Luxury Meets Simplicity"/>
        <h1 className="app__header-h1"></h1>
        <p className="app__header_opensans" style={{margin: "2rem 0"}}>Sip on our new Cadillac Margarita, made with top-shelf spirits, Don Julio Reposado and Grand Marnier.</p>
        <button type= "button" className='custom_button'>Explore Menu</button>
    </div>
    <div className="app_wrapper_img">
      <img src={images.welcome} alt="welcome" />
      

    </div>
  </div>
);

export default Header;
