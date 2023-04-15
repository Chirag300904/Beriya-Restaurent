import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app-menuItem">
    <div className="app-menuItem-head">
      <div className="app-menuItem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="app-menuItem-dash" />
      <div className="app-menuItem-price">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {price}
        </p>
      </div>
    </div>

    <div className="app-menuItem-sub">
      <p className="p__cormorant" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
