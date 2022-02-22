import React from "react";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Client from "./components/Client";
import Prices from "./components/Prices";
const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Client />
      <Prices />
    </div>
  );
};

export default App;
