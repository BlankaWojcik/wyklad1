import React, { Component } from "react";
import HeaderComponent from "../components/HeaderComponent";
import Navbar from "../components/NavbarComponent";
import StadninyC from "../components/StadninyComponent";

 class Stadniny extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <Navbar />
        <StadninyC />
      </div>
    );
  }
}

export default Stadniny; 

/*function Stadniny() {
  return (
    <div>
      <HeaderComponent />
      <Navbar />
      <StadninyC />
    </div>
  );
}

export default Stadniny;*/