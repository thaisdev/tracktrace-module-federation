import React from "react";
import "./business-unity.css";

const BusinessUnity = ({ apiKey }) => {
  return (
    <div className="title">
      <h1>Business Unity</h1>
      <p>{apiKey}</p>
    </div>
  );
};

export default BusinessUnity;
