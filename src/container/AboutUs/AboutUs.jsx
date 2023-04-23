import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <div className="app_wrapper_img">
        <img src={images.G} alt="G_overlay" />
      </div>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Our culinary vision is spearheaded by the Test Kitchen, a group of distinguished, 
        world-class chefs. Constantly seeking inspiration to craft dishes that captivate our guests, 
        these chefs tirelessly develop recipes that resonate with our patrons, 
        always prioritizing the use of fresh, local ingredients.
        </p>   
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Originating from the West Coast and expanding throughout Canada, our establishment presents exceptional
         global cuisine crafted with locally-sourced, fresh ingredients, all served in a lively, modern atmosphere. 
        Our attentive and friendly service is rooted in a genuine passion for providing extraordinary dining experiences 
        that consistently delight our guests and keep them returning for more.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;


