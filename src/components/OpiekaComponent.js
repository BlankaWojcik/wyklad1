import React from "react";
import "./OpiekaComponent.css";
import końzdrowie from "../res/końzdrowie.jpg";
import końkarmienie from "../res/końkarmienie.jpg";
import końpielegnacja from "../res/końpielęgnacja.jpg";
import końzachowanie from "../res/końzachowanie.jpg";



function OpiekaC() {
  return (
    <div className="KontentOpieka">
      <div className="Karmienie">
        <h2>Karmienie konia</h2>
        <h5>Jak zadbać o prawidłowe żywienie konika?</h5>
        <img src={końkarmienie} alt=""></img>
        <p>
        Pożywienie koni roboczych użytkowanych w leśnictwie i rolnictwie składa się głównie 
        z owsa, siana oraz słomy. Można także podawać kiszonkę z kukurydzy, a także suche 
        wysłodki, buraki półcukrowe i pastewne wysłodki prasowane. Należy pamiętać, że źródłem 
        energii dla koni pracujących są węglowodany.
        </p>
      </div>
      <div className="Pielęgnacja">
        <h2>Pielęgnacja konia</h2>
        <h5>Jak zadbać o grzywę konia?</h5>
        <img src={końpielegnacja} alt=""></img>
        <p>
        Jeśli włosy są zbyt gęste i się nie układają, wyrywanie włosów z ogona pozwoli na 
        wygładzenie jego nasady. Podobnie jest z wyrywaniem włosów z grzywy. Najlepiej to 
        robić, gdy koń jest rozgrzany. Podczas takiego zabiegu, nie powinieneś się śpieszyć, 
        aby nie podrażnić wrażliwych okolic zwierzęcia.
        </p>
      </div>
      <div className="Zdrowie">
        <h2>Zdrowie naszego konia</h2>
        <h5>Zdrów jak koń! Czy aby na pewno?</h5>
        <img src={końzdrowie} alt=""></img>
        <p>
        Trzeba zadbać o to, by posiłki były podawane o stałych godzinach. Konie powinny mieć 
        stały dostęp do świeżej wody. Bardzo dobrym rozwiązaniem byłoby również 
        umieszczenie lizawki solnej lub mineralnej. Konie, które są wypasane na pastwisku, 
        mają nieustanny dostęp do pożywienia. Działania profilaktyczne i zapobieganie chorobom 
        jest zawsze lepsze (i tańsze) niż ewentualne leczenie, wynikające ze zbagatelizowania 
        problemu. Przede wszystkim należy uważnie obserwować zachowanie zwierzęcia. Jeśli 
        zauważymy w nim coś podejrzanego, warto wówczas skorzystać z pomocy weterynarza. 
        Będzie on mógł rozpoznać ewentualny problem już we wczesnym stadium i zalecić 
        stosowanie preparatów, takich jak np. suplementy odżywcze dla koni.
        </p>
      </div>
      <div className="Zachowanie">
        <h2>Zachowanie konia</h2>
        <h5>Czy konie mają charakter?</h5>
        <img src={końzachowanie} alt=""></img>
        <p>
        Podstawową zasadą, aby uniknąć nieprzewidzianych i niepożądanych reakcji ze strony 
        konia, jest informowanie go o naszej obecności. Zbliżając się do zwierzęcia należy 
        spokojnie do niego mówić, aby zorientowało się, że jesteśmy, a nie było zaskoczone 
        naszą obecnością i nagłym poklepaniem po grzbiecie. Wiele sygnałów można odczytać z 
        samej głowy konia. Szczególnie należy zwrócić uwagę na ruchy i ustawienie uszu, 
        reakcje oczu, poruszanie wargami i chrapami. Przyjazne spojrzenie, spokojne wodzenie 
        wzrokiem, obserwacja człowieka to sygnał pozytywnego nastawienia. Należy być czujnym, 
        jeśli zaobserwujemy szybkie ruchy oczu, pokazywanie białek, zaczerwienienie oczu – 
        sygnały te mogą świadczyć o strachu lub agresji.
        </p>
      </div>
    </div>
  );
}

export default OpiekaC;