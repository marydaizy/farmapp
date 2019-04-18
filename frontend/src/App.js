import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Farmers from "./Components/Farmers";
import Report from "./Components/Report";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import store from "./store";

// import "bootstrap/dist/js/bootstrap.bundle"
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/farmers" component={Farmers} />
              <Route exact path="/report" component={Report} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
