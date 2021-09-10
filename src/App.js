import React from "react";
import "./App.css";
import { Products } from "./Components/Products/Products";
import { Filter } from "./Components/Filter/Filter";
import { Logo } from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Welcome } from "./Components/Welcome/Welcome";
import {Cupcakes} from ".//Components/Cupcakes/Cupcakes";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ShoppingCart} from "./Components/ShoppingCart/ShoppingCart";
import { Text } from "./Components/Text/Text";
import { About } from "./Components/About/About";
import { Footer } from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Welcome />
      <Filter />
      <Products />
      <ShoppingCart />
      <Text />
      <About />
      <Footer />
    </div>
  );
}

export default App;
