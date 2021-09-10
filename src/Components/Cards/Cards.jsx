import React from "react";
import { Card } from "../Card/Card";
import "./Cards.css";
import data from '../../data/data.json';


export const Cards = () => {

    console.log(data.tortas.map(torta => torta.text))

  return (
    <div className="cards">
       

    {
        data.tortas.map((tortas, index) => (<Card
        key={index} 
        imagen={tortas.imagen} 
        text={tortas.text} 
        price={tortas.price} />)
        )
    }
    </div>
  )
  
};
