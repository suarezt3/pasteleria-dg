import React, {useState} from "react";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {

  const [showLinks, setShowLinks] = useState(true);

  return (
    <div className="navbar">
      <div className="leftside"></div>
      <div className="rightside">
        <div className="links" id={showLinks ? "hidden": ""}>
          <a href="/Home">Inicio</a>
          <a href="/products">Productos</a>
          <a href="/About">Nostros</a>
          <a href="/contact">Contáctenos</a>
        </div>
      <button onClick={()=> setShowLinks(!showLinks)} className="btn btn-menu">{" "}<ReorderIcon /></button>
      </div>
    </div>
  );
}

export default Navbar;
