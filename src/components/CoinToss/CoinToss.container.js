import React from "react"; // moramo jer je riječ o classi
import CoinTossComponent from "./CoinToss.component";

export default class CoinTossContainer extends React.Component {
  /* state definiramo kroz konstruktor
  constructor() {
    super(); // nadkonstruktor; potreban da instanciramo i klasu koju smo naslijedili
    this.state = {
      isHeads: Math.random() > 0.5,
    }
  }
  */
  // ili kroz state
  state = { // classe nemaju podršku za hookove pa koristimo life cycle metode i property kao što je state
    isHeads: Math.random() > 0.5, // ili isHeads: false; početna vrijednost
  }

  tossCoin = () => {
    this.setState({ isHeads: Math.random() > 0.5 }); // metoda za bacanje novčića stavimo je kao dio classe, prototypea umjesto u render metodi, makar i to možemo; pozivom funkcije tossCoin promijeni se vrijednost u stateu i izazove se novi update i render componente i prikaže se vrijednost iz statea ovisno o evaluaciji isHeads && "heads"...true ili false
  };

  render() { // metoda koja se pozove da bi se komponenta crtala na ekran, tj. prikazala u virtualnom DOM-u
    // const { isHeads } = this.state; // destrukturiramo ili dolje pišemo this.state.isHeads
    // console.log(this.state.isHeads); // ako se sa svakim klikom buttona pozove console.log u renderu to znači da je button povezan...ovo je samo za provjeru, nije nužni dio koda
    return (<CoinTossComponent
      isHeads={this.state.isHeads}
      tossCoin={this.tossCoin}
    />
    );

    /* OVO MIČEMO
    <span>
      <button onClick={this.tossCoin}>Toss the coin</button>
      The result of coin toss is {isHeads && "heads"}{!isHeads && "tails"}.
      </span>*/
  }
}

// Kreirali smo funkciju u app.js-u na 3 načina i onda smo prebacili kod u zasebnu komponentu CoinToss.js

/* 1 NAČIN - tehinka s varijablom
function CoinToss() {
  const isHeads = Math.random() > 0.5; // random ide od 0 do 0.999 pa imamo 50% 50%
  const message = isHeads ? "heads" : "tails"; // ako je heads ispiši heads u protivnom ispiši tails; lijevo je uvjet, nakon upitnika slijedi ono što se dogodi ako je uvjet ispunjen, a nakon : ono što se dogodi ako uvjet nije ispunjen

  return (
    <span>The result of coin toss is {message}.</span>
    );
}
*/

/* 2 NAČIN - s ternary opraterom (kada imamo else, kada moramo pokriti slučaj i kada je uvjet ispunjen i kada nije ispunjen što se treba prikazati) - cijeli uvjet stavimo u {}; unutar JSX-a evauliramo random number i vratimo heads ili tails ovisno o tome što se prikazuje

function CoinToss() {
  return (
    <span>The result of coin toss is {Math.random() > 0.5 ? "heads" : "tails"}.</span>
    );
}
 */

// 3 NAČIN - s && (kada nemamo nužno else, kada je uvjet ispunjen prikaži nešto ili se ne prikazuje jer uvjet nije ispunjen) - ako je isHeads u true ispiši heads, a ako nije onda ispišti tails 
// zgodno kada imamo korisnika s određenim ovlastima; isAdministrator onda renderaj neku komponentu, ako nije onda drugu

/*
function CoinToss() {
  const isHeads = Math.random() > 0.5;

  return (
    <span>The result of coin toss is {isHeads && "heads"}{!isHeads && "tails"}.</span>
  );
}
*/

/*
* funkcija prebačena u klasu:

export default class CoinToss extends React.Component {
  render(){
  const isHeads = Math.random() > 0.5;

  return (
    <span>
      The result of coin toss is {isHeads && "heads"}{!isHeads && "tails"}.
      </span>
  );
  }
}

*/


