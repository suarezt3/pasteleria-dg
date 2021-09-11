import React from "react";
import { Link } from 'react-router-dom';
import "./Filter.css";

export const Filter = () => {
  return (
    <ul className="filter">
      <li><Link exact to="/products" activeClassName="active">Cakes</Link></li>
      <li><Link exact to="/productsTwo" activeClassName="active">Cupcakes</Link></li>
      
    </ul>  
  );
};

