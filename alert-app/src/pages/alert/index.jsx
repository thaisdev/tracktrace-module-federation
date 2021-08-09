import React from "react";
import "./alert.css";

const Alert = ({ apiKey }) => {
  return (
    <div className="title">
      <h1>Alert</h1>
      <p>{apiKey}</p>
    </div>
  );
};

export default Alert;
