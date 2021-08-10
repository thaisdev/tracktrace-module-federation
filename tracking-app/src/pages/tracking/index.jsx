import React from "react";
import "./tracking.css";

const Tracking = ({ apiKey }) => {
  return (
    <div className="title">
      <h1>Tracking</h1>
      <p>{apiKey}</p>
      <p>Tracking para exemplo</p>
    </div>
  );
};

export default Tracking;
