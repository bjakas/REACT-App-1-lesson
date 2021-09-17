import logo from './logo.svg';
import './App.css';
/* import * as dayjs from "dayjs"; */
/* import { nanoid } from "nanoid"; */
/* import x, { getId } from "./helpers"; prvo smo importali def. i dali ime x, i onda named import koji pišemo u {} i onda dolje u p upisujemo {x()} i {getId()} */
// import { getId } from "./helpers"; // modul koji se zove helpers
// import constant, { getRandomName, getRandomColor} from "./random";
import CurrentDate from './components/CurrentDate';
import UniqueId from './components/UniqueId';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to my app!</h1>
        <p>
          This app is going to be a chat app.
        </p>
        <CurrentDate />
        <UniqueId />
        <UserInfo />
        <p>Word of every single day is constant and is: {constant}</p>
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
