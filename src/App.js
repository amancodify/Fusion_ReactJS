import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./components/sections/Home";
import AboutUs from "./components/sections/About";
import ContactUs from "./components/sections/Contact";
import Services from "./components/sections/Services";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/services/:id" component={Services} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
