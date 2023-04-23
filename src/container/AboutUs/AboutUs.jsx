import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Cactus Club Cafe's culinary vision is led by the Test Kitchen, a team of world-class chefs.
         The chefs in the Test Kitchen are always looking for inspiration to make food people love, and they work relentlessly to create recipes that will be cherished by our guests, using fresh, local ingredients.
        </p>
        <button type="button" className="custom__button">Explore</button>
      </div>

    
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Born on the West Coast and growing across Canada, Cactus Club Cafe offers the best in global cuisine using local, fresh ingredients served in a vibrant, contemporary setting.
        Our service is attentive, warm and unpretentious. Our people are passionate about delivering food and experiences that will keep our guests coming back again and again.
        </p>
        <button type="button" className="custom__button">Explore</button>
      </div>
    </div>
  </div>
);

export default AboutUs;


