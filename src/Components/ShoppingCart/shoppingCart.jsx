import React from 'react';
import { TotalProducts } from '../TotalProducts/TotalProducts';
import './ShoppingCart.css';

export const ShoppingCart = () => {
    return (
        <div className="shopping-cart">
            <h3 className="cart-title">Carrito de compras</h3>
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
        </div>
    )
}

