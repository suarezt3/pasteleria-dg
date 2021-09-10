import React from "react";
import "./App.css";
import { Products } from "./Components/Products/Products";
import { Filter } from "./Components/Filter/Filter";
import { Logo } from "./Components/Logo/Logo";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Welcome } from "./Components/Welcome/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart";
import { Text } from "./Components/Text/Text";
import { About } from "./Components/About/About";
import { Footer } from "./Components/Footer/Footer";
import { Cakes } from "./Components/Cakes/Cakes";
import { Cupcakes } from "./Components/Cupcakes/Cupcakes";
import { Products2 } from "./Components/Products2/Products2";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Logo />
        <Welcome />
        <Switch>
        <Filter />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products2" component={Products2} />
        </Switch>
        <ShoppingCart />
        <Text />
        <About />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
