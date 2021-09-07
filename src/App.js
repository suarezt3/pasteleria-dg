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
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ShoppingCart} from "./Components/ShoppingCart/ShoppingCart";
import { Text } from "./Components/Text/Text";
import { About } from "./Components/About/About";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Welcome />
      <Filter />
      <Router>
        <Switch>
          <Route exact path="/cakes" component={Cakes} />
          <Route exact path="/cupcakes" component={Cupcakes} />
          <Route exact path="/frozen" component={Frozen} />
        </Switch>
      </Router>
      <Cards />
      <ShoppingCart />
      <Text />
      <About />
    </div>
  );
}

export default App;
