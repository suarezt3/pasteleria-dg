import React from "react";
import "./TotalProducts.css";

export const TotalProducts = () => {
  return (
    <>
      <div className="cart-product">
        <p className="cart-description">
          Tortas temáticas (redondas o cuadradas) con Toppers en 3D
        </p>
        <p className="cart-price">$ 25.000</p>
        <div className="cart-btn">
          <button>
            <i className="fas fa-minus"></i>
          </button>
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        
      </div>
    </>
  );
};
