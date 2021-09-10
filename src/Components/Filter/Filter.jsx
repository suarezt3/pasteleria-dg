import React from "react";
import { NavLink } from "react-router-dom";
import "./Filter.css";

export const Filter = () => {
  return (
    <ul className="filter">
      <NavLink exact to="/products" activeClassName="active">Cakes</NavLink>
      <NavLink exact to="/products2" activeClassName="active">Cupcakes</NavLink>
    </ul>  
  );
};
