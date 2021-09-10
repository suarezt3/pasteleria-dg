import React from 'react';
import './Products2.css';
import { Cupcakes } from '../Cupcakes/Cupcakes';
import data from '../../data/data.json';

export const Products2 = () => {
    return (
        <div className="cards">
    {
        data.cupcakes.map((cupcakes, index) => (<Cupcakes
        key={index} 
        imagen={cupcakes.imagen} 
        text={cupcakes.text} 
        price={cupcakes.price} />)
        )
    }
    </div>
    )
}
