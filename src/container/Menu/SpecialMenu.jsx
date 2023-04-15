import React from "react";

import images from "../../constants/images";
import data from "../../constants/data";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app-specialMenu flex__center section__padding" id="menu">
    <div className="app-specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>
    <div className="app-specialMenu-menu">
      <div className="app-specialMenu-menu-wine">
        <p className="app-specialMenu-menu-heading">Wine & Beer</p>
        <div className="app-specialMenu-menu-items">
          {data.wines.map((wine, i) => (
            <MenuItem
              key={wine.title + i}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app-specialMenu-menu-img">
        <img src={images.menu} alt="ImgWine" />
      </div>
      <div className="app-specialMenu-menu-cocktails">
        <p className="app-specialMenu-menu-heading">Cocktails</p>
        <div className="app-specialMenu-menu-items">
          {data.cocktails.map((cocktail, i) => (
            <MenuItem
              key={cocktail.title + i}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button className=" app-specialMenu-menu-button" type="button">
        Order Now
      </button>
    </div>
  </div>
);

export default SpecialMenu;
