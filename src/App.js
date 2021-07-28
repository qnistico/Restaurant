import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./Nav";

import './App.scss';
import LandingPage from "./LandingPage";
import MenuItem from "./MenuItem";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import MenuPage from "./MenuPage";
import ChefProfile from "./ChefProfile";
import Gallery from "./Gallery";
import SimpleReactLightbox from "simple-react-lightbox";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import { Helmet } from "react-helmet";


function App() {
  
  
  
  return (
    <div className="App">
      <Router>
        <Helmet />
      <ScrollToTop />

        <Nav />
        <Switch>
          <Route exact path="/">
          <LandingPage />
          </Route>
          <Route exact path="/AboutPage">
            <AboutPage />
          </Route>
          <Route exact path="/MenuItem">
            <MenuItem />
          </Route>
          <Route exact path="/MenuPage">
            <MenuPage />
          </Route>
          <Route exact path="/ChefProfile">
            <ChefProfile />
          </Route>
          
          <Route exact path="/Gallery">
            <SimpleReactLightbox>
            <Gallery />
            </SimpleReactLightbox>
          </Route>
          <Route exact path="/ContactPage">
            <ContactPage />
          </Route>
          
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
