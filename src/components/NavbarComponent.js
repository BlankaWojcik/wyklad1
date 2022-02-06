import React, { Component } from "react";
import "./NavbarComponent.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <div id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/Home">
                Strona Główna
              </a>
              <a className="nav-link" href="/Rasy">
                Rasy
              </a>
              <a className="nav-link" href="/Stadniny">
                Stadniny
              </a>
              <a className="nav-link" href="/Opieka">
                Opieka
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;