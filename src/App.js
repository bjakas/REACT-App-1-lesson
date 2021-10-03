/* import * as dayjs from "dayjs"; */
/* import { nanoid } from "nanoid"; */
/* import x, { getId } from "./helpers"; prvo smo importali def. i dali ime x, i onda named import koji pišemo u {} i onda dolje u p upisujemo {x()} i {getId()} */
// import { getCurrentDate, getId } from "./helpers"; // modul koji se zove helpers
// import constant from "./random"; <p>The random constant is {constant}</p>
// import CurrentDate from './components/CurrentDate';
// import UniqueId from './components/UniqueId';
// import UserInfo from './components/UserInfo';
// import CoinToss from "./components/CoinToss";
// import LikeButton from './components/LikeButton'; 
/* Ovo smo maknuli iz App
        <p>
          <LikeButton />
          This app is going to be a chat app. <CoinToss />
        </p>
        <CurrentDate />
        <UniqueId />
        <UserInfo />
*/
import './App.css';
import MessageForm from './components/MessageForm';
import { useContext, useState } from "react";
import Message from './components/Message';
import { getId } from './helpers';
import AppContext from "./contexts/AppContext"; // sada importamo context da bismo mogli koristiti njegov consumer

const numbers = [1, 2, 3, 4];
const numberElements = numbers.map(number =>
  ({ key: getId(), value: number }) // pripremimo key
);

function App() {
  const appContext = useContext(AppContext); // prosljeđujemo context (uz useContext hook) koji želimo koristiti - dobit ćemo objekt našeg contexta
  console.log(appContext); // ispišemo objekt stanja da vidimo što smo dobili
  // const [messageObject, setMessageObject] = useState(null); // dali smo ime stateu messageObject, a funkciji setMessageObject; na submit spremamo zadnje aktualno stanje
  const [messageObjects, setMessageObjects] = useState([]); // 1a u prazan niz stavljamo poruke (inijalno stanje nam je prazan niz); imali smo jednu poruku pa je bilo useState(null)

  const handleSendMessage = (messageObject) => { // 2.a
    setMessageObjects([...messageObjects, messageObject]); // 2b u naš state šaljemo sve što se nalazi u trenutnom arrayu; setMessageObject funkcija za setanje statea;state je messageObjects a messageObject je ono što smo dobili u poruci, novi objekt
  };


  /**
   * iz returna smo maknuli
   * 
   *         {messageObject !== null && (
          <Message 
            isImportant={messageObject.isImportant}
            message={messageObject.message}
            title={messageObject.title}
          />
        )}
        <MessageForm onSendMessage={setMessageObject}/>
   */

  /*
  messageObjects.length > 0 && messageObjects.map((messageObject, index) ili s obzirom da mapiranje niza s nula elemenata dobijemo niz s nula el. pa pišemo kao niže skraćeno jer nema ne treba provjera {messageObjects.map((messageObject, index) => ...
  */

  return (
    <div className="App">
      {numberElements.map((numberElement) =>
        <button key={numberElement.key}>
          {numberElement.value}
        </button>
      )}
      <header className="App__header">
        <h1>My Chat App {appContext.language}</h1>
      </header>
      <main className="App__main">
        <div className="App__message-container">
          {messageObjects.length === 0 && <p>No messages</p>}
          {messageObjects.map((messageObject, index) =>
            <Message
              key={index}
              isImportant={messageObject.isImportant}
              message={messageObject.message}
              title={messageObject.title}
            />
          )}
        </div>
        <div className="App__message-form">
          <MessageForm onSendMessage={handleSendMessage} />
        </div>
      </main>
      <footer className="App__footer">
        <a
          className="App-link"
          href="https://github.com/dstrekelj"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub Profile
        </a>
      </footer>
    </div>
  );
}

export default App;

