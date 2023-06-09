import React from "react";

import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Ward" />
      <h1 className="headtext__cormorant">What We Belive In</h1>
      <div className="app-chef-content">
        <div className="app-chef-content-quote">
          <img src={images.quote} alt="Quote" />
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .{" "}
          </p>
        </div>
        <p className="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
      <div className="app-chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="Sign" />
      </div>
    </div>
  </div>
);

export default Chef;
