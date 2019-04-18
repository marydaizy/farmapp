import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./rice.png";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <div class="fadeIn first">
              <img src={logo} alt="logo" width="200px" height="200px" />
            </div>

            <form>
              <a
                href="/admin/login/?next=/admin/"
                className="fadeIn second btn btn-lg btn-warning btn-block text-uppercase"
              >
                Admin
              </a>
              <hr className="my-4" />
              <Link to="/login">
                <button
                  className="fadeIn third btn btn-lg btn-warning btn-block text-uppercase"
                  type="submit"
                >
                  Officer
                </button>
              </Link>
            </form>

            <div id="formFooter">
              <a class="underlineHover" href="#">
                Go to the Site
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
