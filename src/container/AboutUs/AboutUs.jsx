import React from "react";

import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app-aboutus app__bg flex__center section__padding" id="about">
    <div className="app-aboutus-overlay flex__centre">
      <img src={images.G} alt="G" />
    </div>
    <div className="app-aboutus-content flex__center">
      <div className="app-aboutus-content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      <div className="app-aboutus-content-knife">
        <img src={images.knife} alt="Knife" />
      </div>
      <div className="app-aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
