import React from 'react';
import './Cupcakes.css'

export const Cupcakes = (imagen, text, price) => {

  console.log(imagen)

    return (
        <div>
            <div className="card">
      <div className="box-img">
        <img className="img" src={imagen} alt="" />
      </div>
      <p className="product-description">{text}</p>
      <p className="size">500 g</p>
      <div className="box-count">
          <label className="amount" htmlFor="amount">Cantidad</label>
        <input className="count" type="number" htmlname="amount" min="0" max="20" step="1" />
      </div>
      <p className="price">{price}</p>
      <button className="btn-add">Agregar</button>
    </div>
        </div>
    )
}
