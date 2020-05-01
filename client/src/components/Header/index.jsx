import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Navbar from "../Navbar/index";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header navbar navbar-dark bg-dark">
          <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">
                Logo
              </a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <a href="">Sass</a>
                </li>
                <li>
                  <a href="">Components</a>
                </li>
                <li>
                  <a href="">JavaScript</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;
