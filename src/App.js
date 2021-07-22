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

function App() {
  
  
  return (
    <div className="App">
      <Router>
      <ScrollToTop />

        <Nav />
        <Switch>
          <Route exact path="/">
          <LandingPage />
          </Route>
          <Route exact path="/MenuItem">
            <MenuItem />
          </Route>
          
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
