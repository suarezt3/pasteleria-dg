import React from 'react';
import './ProductsTwo.css';
import { Cupcakes } from '../Cupcakes/Cupcakes';
import data from '../../data/data.json';

export const ProductsTwo = () => {
    return (
        <div className="products-two">
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
