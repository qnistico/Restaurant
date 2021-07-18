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
import MenuItemTemplate from "./MenuItemTemplate";
import PennePasta from "./PennePasta";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
          <LandingPage />
          </Route>
          <Route exact path="/MenuItemTemplate">
            <MenuItemTemplate />
          </Route>
          <Route exact path="/PennePasta">
            <PennePasta />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
