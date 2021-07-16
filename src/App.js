import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./Nav";

import './App.scss';
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
          <LandingPage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
