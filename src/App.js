import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./components/sections/Home";
import AboutUs from "./components/sections/About";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
