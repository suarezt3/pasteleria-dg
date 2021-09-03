import React from "react";
import "./Card.css";

export const Card = () => {
  return (
    <div className="card">
      <div className="box-img">
        <img className="img" src="" alt="" />
      </div>
      <p className="product-description">Tortas temáticas (redondas o cuadradas) con Toppers en 3D</p>
      <p className="size">500 g</p>
      <div className="box-count">
          <label className="amount" htmlFor="amount">Cantidad</label>
        <input className="count" type="number" htmlname="amount" min="0" max="20" step="1" />
      </div>
      <p className="price">$ 35.000</p>
      <button className="btn-add">Agregar</button>
    </div>
  );
};
