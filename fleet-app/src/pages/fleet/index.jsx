import React from "react";
import "./fleet.css";

const Fleet = ({ apiKey }) => {
  return (
    <div className="title">
      <h1>Fleet 2</h1>
      <p>{apiKey}</p>
    </div>
  );
};

export default Fleet;
