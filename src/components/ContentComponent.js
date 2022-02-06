import React, { Component, /*useRef*/ } from "react";
import konik1 from "../res/konik_1.jpg";
import konik2 from "../res/konik_2.jpg";
import konik3 from "../res/konik_3.jpg";

import "./ContentComponent.css";
class Content extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "",
      tekst: "To jest tekst, który będzie sie zmieniał",
    };
    this.state2 = {
      tekst2: "drugi tekst do zmiany",
    };
  }

  boxClick = (e) => {
    this.setState({
      backgroundColor: "pink",
    });
  };

  zmianaTekstu1() {
    this.setState({ tekst: "To było onCopy" });
  }
  zmianaTekstu2() {
    this.setState({ tekst: "To było onMouseLeave" });
  }
  zmianaTekstu3() {
    this.setState({ tekst: "To było onInput" });
  }
  zmianaTekstu4() {
    this.setState({ tekst: "To było onCut" });
  }
  zmianaTekstu5() {
    this.setState2({ tekst2: "To było onMouseMove" });
  }

  render() {
    return (
      <div
        className="Bg"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <button onClick={this.boxClick}>OnClick</button>
        <button onDoubleClick={this.boxClick}>OnDoubleClick</button>
        <button onCopy={() => this.zmianaTekstu1()}>OnCopy</button>
        <button onMouseLeave={() => this.zmianaTekstu2()}>OnMouseLeave</button>
        <form>
          <label>Tutaj zastosowanie OnInput: </label>
          <input onInput={() => this.zmianaTekstu3()} />
          <br></br>
          <label>Tutaj zastosowanie OnCut: </label>
          <input onCut={() => this.zmianaTekstu4()} />
          <br></br>
          <label>Tutaj zastosowanie OnKeyPress: </label>
          <input onKeyPress={() => this.zmianaTekstu4()} />
        </form>
        <br></br>
        <h3>{this.state.tekst}, inne zdarzenia są np w zakładce "Rasy", więc zapraszam</h3>
        <h2>Strona poświęcona konikom oraz ich pielęgnacji</h2>
        <div className="zdjecia_konikow1">
          <img src={konik1} id="konik1" alt=""></img>
          <img src={konik2} id="konik2" alt=""></img>
          <img src={konik3} id="konik3" alt=""></img>
        </div>
      </div>
    );
  }
}

export default Content;