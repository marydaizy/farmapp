import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./Components/Navbar"
import Login from "./Components/Login"
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Farmer from "./Components/Farmer";
import Report from "./Components/Report";

// import "bootstrap/dist/js/bootstrap.bundle"
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/farmer" component={Farmer}></Route>
        <Route exact path="/report" component={Report}></Route>
      </Switch>   
      </div>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
