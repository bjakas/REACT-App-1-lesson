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
import { useState } from "react";
import Message from './components/Message';

function App() {
  const [messageObject, setMessageObject] = useState(null); // dali smo ime stateu messageObject, a funkciji setMessageObject

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my app!</h1>
        {messageObject !== null && (
          <Message 
            isImportant={messageObject.isImportant}
            message={messageObject.message}
            title={messageObject.title}
          />
        )}
        <MessageForm onSendMessage={setMessageObject}/>
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
