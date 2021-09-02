import React from "react";
import "./Card.css";

export const Card = () => {
  return (
    <div className="card">
      <div className="box-img">
        <img className="img" src="" alt="" />
      </div>
      <p>Torta de Tres leches</p>
      <div>
        <label for="speed"></label>
        <input type="number" name="speed" value="0" min="1" max="10" step="1" />
      </div>
    </div>
  );
};
