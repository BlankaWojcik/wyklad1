import React, { Component } from "react";
import "./VideoComponent";
import VideoYT from "./VideoComponent";
import "./StadninyComponent.css";

class StadninyC extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "",
    };
  }

  render() {
    return (
      <div className="KontentStadniny">
        <div className="lewyPanel">
          <h2>Polecane Stadniny</h2>
          <h3>Konie Arabskie</h3>
          <ul>
            <li>http://cracovia-arabians.pl/pl</li>
            <li>http://skarabka.pl/</li>
            <li>http://stadninamichalow.pl/pl/</li>
          </ul>
          <h3>Konie Fryzyjskie</h3>
          <ul>
            <li>http://hodowlakonifryzyjskich.pl</li>
            <li>http://fryzywczarnowce.pl/</li>
          </ul>
          <h3>Konie Huculskie</h3>
          <ul>
            <li>http://www.huculy.com.pl/</li>
            <li>http://stadninarzeszotary.pl/</li>
            <li>http://www.nielepice.com.pl/pl/</li>
          </ul>

          <h3> Ostatnie zastosowane wydarzenie: </h3>
          <form>
            <label> onKeyPress:</label>
            <input onKeyPress={this.kolor()}></input>
          </form>
        </div>
        <div className="prawyPanel">
          <h2>Jak wybrać dobrego pierwszego konia?</h2>
          <VideoYT />
        </div>
      </div>
    );
  }
}

export default StadninyC;