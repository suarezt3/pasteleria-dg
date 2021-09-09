import React from "react";
import "./App.css";
import { Cards } from "./Components/Cards/Cards";
import { Filter } from "./Components/Filter/Filter";
import { Logo } from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Welcome } from "./Components/Welcome/Welcome";
import {Cakes} from "../src/Components/Cakes/Cakes";
import {Cupcakes} from ".//Components/Cupcakes/Cupcakes";
import {Frozen} from "./Components/Frozen/Frozen";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ShoppingCart} from "./Components/ShoppingCart/ShoppingCart";
import { Text } from "./Components/Text/Text";
import { About } from "./Components/About/About";
import { Footer } from "./Components/Footer/Footer";
import { Card } from "./Components/Card/Card";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Welcome />
      <Filter />
      <Cards />
      <ShoppingCart />
      <Text />
      <About />
      <Footer />
    </div>
  );
}

export default App;
