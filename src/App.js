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
import { ProductsTwo } from "./Components/ProductsTwo/ProductsTwo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Logo />
        <Welcome />
        <Products />
        <ProductsTwo />
        <Switch>
        <Filter />
        <Route exact path="/" component={Products} />
        <Route exact path="/cupcakes" component={ProductsTwo} />
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
