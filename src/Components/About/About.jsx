import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="container-about">
      <h3>Nosotros</h3>
      <div className="box-about">
        <div className="about about-1">
          <div className="box-image image-1">
            <img src="" alt="" />
          </div>
          <h4 className="name">Gloria López</h4>
          <p>Soy Pastelera de profesión y Cake Artist de Pastelería DG Me esfuerzo en plasmar en cada una de las tortas que elaboro lo que el cliente desea </p>
        </div>
        <div className="about about-2">
          <div className="box-image image-2">
            <img src="" alt="" />
          </div>
          <h4 className="name">David Zúñiga</h4>
          <p>Apasionado por la panadería y con mi esposa decidimos poner nuestra experiencia de más de 15 años para crear deliciosos productos de repostería y panadería y llevarlos a tu mesa </p>
        </div>
      </div>
    </div>
  );
};
