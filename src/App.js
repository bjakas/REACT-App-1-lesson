import React from "react"; // ne koristimo ga trenutno, ali ga možemo ostaviti 
import logo from './logo.svg';
import './App.css';
/* import * as dayjs from "dayjs"; */
/* import { nanoid } from "nanoid"; */
/* import x, { getId } from "./helpers"; prvo smo importali def. i dali ime x, i onda named import koji pišemo u {} i onda dolje u p upisujemo {x()} i {getId()} */
// import { getCurrentDate, getId } from "./helpers"; // modul koji se zove helpers
import constant from "./random";
import CurrentDate from './components/CurrentDate';
import UniqueId from './components/UniqueId';
import UserInfo from './components/UserInfo';
import CoinToss from "./components/CoinToss";

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
function Greet({greeting, name, children}) {
  //console.log(`${greeting} ${name}!`);
  return (
    <div>
      <div>{greeting} {name}!
      </div>
      {children}
    </div>
    );
}
*/


// greet({greeting: "Aloha", name: "Domagoj"});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to my app!</h1>
        <p>
          This app is going to be a chat app. <CoinToss />
        </p>
        <CurrentDate />
        <UniqueId />
        <UserInfo />
        <p>The random constant is {constant}</p>
        <a
          className="App-link"
          href="https://github.com/bjakas"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub profile
        </a>
      </header>
    </div>
  );
}

export default App;
