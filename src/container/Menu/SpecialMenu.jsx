import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palate" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_spirits  flex__center">
        <p className="app__specialMenu-menu_heading">Spirits</p>
        <div className="app__specialMenu_menu_items">
          {data.spirits.map((spirit, index) => (
            <MenuItem key={spirit.title + index} title={spirit.title} price={spirit.price} tags={spirit.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_beers  flex__center">
        <p className="app__specialMenu-menu_heading">Beers</p>
        <div className="app__specialMenu_menu_items">
          {data.beers.map((beer, index) => (
            <MenuItem key={beer.title + index} title={beer.title} price={beer.price} tags={beer.tags} />
          ))}
        </div>
      </div>
    </div>

    
  </div>
);

export default SpecialMenu;
