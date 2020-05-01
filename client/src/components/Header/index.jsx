import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class Header extends React.Component {
  render() {
    return <h1>ANTHOM STUDIO</h1>;
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;
