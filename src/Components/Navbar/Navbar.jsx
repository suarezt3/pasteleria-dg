import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="rightside">
        <a href="/Home">Inicio</a>
        <a href="/products">Productos</a>
        <a href="/About">Nostros</a>
        <a href="/contact">Contáctenos</a>
      </div>
    </div>
  );
}

export default Navbar;
