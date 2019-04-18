import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from "./Home";
class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="Back">
          <i class="fa fa-arrow-left" onclick="Back()" />
        </div>

        <form action="" method="post">
        <div class="preview text-center">
                <img class="preview-img" src="http://simpleicon.com/wp-content/uploads/account.png" alt="Preview Image" width="150" height="150"/>
                <div class="browse-button">
                    <i class="fa fa-pencil-alt"></i>
                    <input class="browse-input" type="file" required name="UploadedFile" id="UploadedFile"/>
                </div>
                <span class="Error"></span>
            </div>
          <div
            id="login-row"
            class="row justify-content-center align-items-center">
            <div id="login-column" class="col-md-6">
              <div id="login-box" class="col-md-12">
                <div class="form-group">
                  <label htmlFor="username" >
                    Username:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="password" >
                    Password:
                  </label>
                  <br />
                  <input
                    type="tpassword"
                    name="password"
                    id="password"
                    class="form-control"
                  />
                </div>
                <div id="Login-link" class="text-right">
                 
                    <Link to ="/farmers"> <button className="btn btn-sm btn-warning">Login</button></Link>
                  
                </div>
              </div>
            </div>
          </div>
          
        </form>
      </div>
    );
  }
}
export default Login;
