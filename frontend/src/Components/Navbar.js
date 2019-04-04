import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
        <div className="navbar">
        <nav>
          <ul>
          <li><Link to="/">Home</Link ></li>
            <li><Link to="/login">Login</Link ></li>
            <li><Link to="/farmer">Farmer</Link ></li>
            <li><Link to="/report">Report</Link ></li>
          </ul>
        </nav>

      </div>
    )
  }
}
export default Navbar
