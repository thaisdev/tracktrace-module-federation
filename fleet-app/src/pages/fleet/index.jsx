import React from "react";
import "./fleet.css";

const Fleet = ({ apiKey }) => {
  return (
    <div className="title">
      <h1>Fleet</h1>
      <p>{apiKey}</p>
    </div>
  );
};

export default Fleet;
