import React, { Component } from "react";
import arabski from "../res/arabski.jpg";
import fryzyjski from "../res/fryzyjski.jpg";
import huculski from "../res/huculski.jpg";
import "./RasyComponent.css";

class RasyC extends Component {
  constructor() {
    super();
    this.state = {
      display: "",
      backgroundColor: "",
    };
  }

  znikanieTekstu = () => {
    this.setState({
      display: "none",
    });
  };

  render() {
    return (
      <div className="Kontent">
        <div className="Rasa1">
          <h2>Koń arabski</h2>
          <img src={arabski} alt=""></img>
          <h3> zastosowanie onMouseMove (tekst znika)</h3>
          <p
            id="ras1"
            style={{ display: this.state.display }}
            onMouseMove={this.znikanieTekstu}
          >
            Koń czystej krwi arabskiej – jedna z podstawowych ras koni gorącokrwistych, 
            uważana często za kwintesencję piękna konia. Konie arabskie pojawiły się na 
            Półwyspie Arabskim co najmniej 2500 lat temu. Konie arabskie są bardzo wytrzymałe, 
            niewymagające w hodowli i szybkie w galopie. Na długich dystansach nie mają sobie 
            równych. Są inteligentne, życzliwe, wrażliwe i przywiązane do człowieka. „Araby” 
            to konie o żywym temperamencie, lecz zawsze posłuszne. Koni tej rasy używano w 
            hodowli wielu innych ras. Jest to najstarsza na świecie rasa hodowanych obecnie koni.
          </p>
        </div>
        <div className="Rasa2">
          <h2>Koń fryzyjski</h2>
          <img src={fryzyjski} alt=""></img>
          <h3> zastosowanie onMouseUp</h3>
          <p
            id="ras2"
            style={{ display: this.state.display }}
            onMouseUp={this.znikanieTekstu}
          >
            Rasa koni zimnokrwistych pochodząca z historycznej krainy Fryzji 
            (w dzisiejszej Holandii). Do charakterystycznych cech tych koni należą: 
            kare umaszczenie, bujna grzywa, ogon i szczotki pęcinowe oraz wysokie i efektowne 
            chody. Hodowla koni fryzyjskich podlega ścisłej selekcji i opiera się o szereg 
            zasad wytyczanych przez Holenderski Związek Hodowców Koni Fryzyjskich, któremu 
            podlegają wszystkie inne organizacje hodowlane w różnych krajach. Związek jest 
            jedynym organem uprawnionym do oceny koni i wpisywania ich do księgi stadnej. 
            Najsurowiej oceniane są ogiery. Dzięki takiej selekcji, pielęgnowane cechy rasowe 
            są głęboko zakorzenione i zachowane przez wiele lat hodowli tych koni.
          </p>
        </div>
        <div className="Rasa3">
          <h2>Koń huculski</h2>
          <img src={huculski} alt=""></img>
          <h3> zastosowanie onMouseDown </h3>
          <p
            id="ras3"
            style={{ display: this.state.display }}
            onMouseDown={this.znikanieTekstu}
          >
            Rasa konia domowego, pochodząca od tarpana. Jest to prymitywna rasa koni górskich. 
            Są to konie żywotne, silne i odporne. Koni tych używano niegdyś głównie jako 
            jucznych. Konie tej rasy bez problemów mogły przenosić ciężkie ładunki nawet po 
            wymagających górskich ścieżkach. Po podpisaniu w 1992 roku Konwencji o różnorodności 
            biologicznej (Polska dokument ratyfikowała w roku 1996) w kraju wprowadzono 
            Program ochrony zasobów genetycznych koni rasy huculskiej. W jej wyniku na 
            przestrzeni lat z 95 hucułów (łącznie 70 klaczy w SK Siary i IZ Rymanów oraz 25 
            ogierów w PSO Klikowa) w 1988 roku, poprzez 300 klaczy i prawie 50 ogierów w roku 
            1999 stan wzrósł do pięciu tysięcy koni tej rasy w roku 2014.
          </p>
        </div>
      </div>
    );
  }
}

export default RasyC;