import React from 'react';

import { SubHeading } from '../../components';


const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">12345 UBC drive, V4G 1G1 Earth,MW</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
    </div>

    <div className="app__wrapper_img">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.131735533176!2d-2.455978284214934!3d53.26735497996622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a792266c7a30f%3A0x2d2cc9e56b2d3b3f!2sWhatcroft%20Hall%20Ln%2C%20Rudheath%2C%20Northwich%20CW9%207SG%2C%20UK!5e0!3m2!1sen!2sus!4v1648234185426!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
    ></iframe>

    </div>
  </div>
);

export default FindUs;