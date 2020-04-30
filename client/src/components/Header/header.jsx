import React, { Component } from "react";
import "./header.css";
import image from "./2.jpg";

class Header extends Component {
  render() {
    return (
      <header class="header-user-dropdown">
        <div class="header-limiter">
          <h1>
            <a href="#">
              Company<span>logo</span>
            </a>
          </h1>

          <nav>
            <a href="#">Overview</a>
            <a href="#">Surveys</a>
            <a href="#">Reports</a>
            <a href="#">
              Roles <span class="header-new-feature">new</span>
            </a>
          </nav>

          <div class="header-user-menu">
            <img src={image} alt="User Image" />

            <ul>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#" class="highlight">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
