import React from "react";
import { Link } from "react-router-dom";
import "./Filter.css";

export const Filter = () => {
  return (
    <ul className="filter">
      <Link exact to="/products" activeClassName="active">Cakes</Link>
      <Link exact to="/products2" activeClassName="active">Cupcakes</Link>
    </ul>  
  );
};

