import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import logo from "./rice.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar ">
        <header>
          <nav>
            <div className="logo">
              <img src={logo} alt="logo" width="100px" height="100px" />
            </div>
            
            <div className="menu">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/farmers">Farmers</Link>
                </li>
                <li>
                  <Link to="/report">Report</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default Navbar;
