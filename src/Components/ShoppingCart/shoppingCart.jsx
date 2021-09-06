import React from 'react';
import { TotalProducts } from '../TotalProducts/TotalProducts';
import './ShoppingCart.css';

export const ShoppingCart = () => {
    return (
        <div className="box-cart">
            <h3 className="cart-title">Carrito de compras</h3>
        <div className="shopping-cart">
            <TotalProducts className="products" />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
            <TotalProducts />
        </div>
        <div className="box-total">
            <h3 className="total">Total</h3>
            <h3 className="total-price">$ 35.000</h3>
        </div>
        </div>
    )
}

