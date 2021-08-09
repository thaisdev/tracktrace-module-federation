import React from "react";
import "./motora.css";

interface MotoraProps {
  apiKey?: string;
}

const Motora: React.FC<MotoraProps> = ({ apiKey }: MotoraProps) => {
  return (
    <div className="title">
      <h1>Motora</h1>
      <p>{apiKey}</p>
    </div>
  );
};

export default Motora;
