import React from "react";
import { Cakes } from "../Cakes/Cakes";
import "./Products.css";
import data from '../../data/data.json';


export const Products = () => {

    console.log(data.tortas.map(torta => torta.text))

  return (
    <div className="cards">
    {
        data.tortas.map((tortas, index) => (<Cakes
        key={index} 
        imagen={tortas.imagen} 
        text={tortas.text} 
        price={tortas.price} />)
        )
    }
    </div>
  )
  
};
