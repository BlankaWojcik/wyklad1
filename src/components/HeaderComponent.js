import React, { Component } from "react";
import "./HeaderComponent.css";
import koń from "../koń.svg";

class Header extends Component {
  render() {
    return (
      <div className="HeaderContainer">
        <a id="logoLink" href="/">
          <h1>Strona o konikach naszych pięknych kochanych</h1>
          <img src={koń} className="headerLogo" alt="logo" />
        </a>
      </div>
    );
  }
}

export default Header;