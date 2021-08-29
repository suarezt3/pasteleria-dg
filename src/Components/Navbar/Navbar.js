import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside"></div>
      <div className="rightside">
        <div className="links">
          <a href="/Home">Inicio</a>
          <a href="/products">Productos</a>
          <a href="/About">Nostros</a>
          <a href="/contact">Contáctenos</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
