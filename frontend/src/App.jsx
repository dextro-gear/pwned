import React, { Component } from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Subscribe from "./pages/subscribe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <header>
          <nav className="navbar">
            <ul>
              <li>
                <a className="nav-links" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-links" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-links" href="/subscribe">
                  Subscribe
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/subscribe">
            <Subscribe />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
