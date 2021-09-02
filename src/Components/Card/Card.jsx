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
          <label for="amount">Cantidad</label>
        <input type="number" name="amount" min="0" max="20" step="1" />
      </div>
    </div>
  );
};
