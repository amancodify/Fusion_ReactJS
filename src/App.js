import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/sections/Home";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
