import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item">
        <Link to="/fleet">FLEET</Link>
      </div>
      <div className="menu-item">
        <Link to="/alert">ALERT</Link>
      </div>
    </div>
  );
};

export default Menu;
