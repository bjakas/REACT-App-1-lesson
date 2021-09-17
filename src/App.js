import logo from './logo.svg';
import './App.css';
/* import * as dayjs from "dayjs"; */
/* import { nanoid } from "nanoid"; */
/* import x, { getId } from "./helpers"; prvo smo importali def. i dali ime x, i onda named import koji pišemo u {} i onda dolje u p upisujemo {x()} i {getId()} */
import { getCurrentDate, getId } from "./helpers"; // modul koji se zove helpers
import constant, { getRandomName, getRandomColor} from "./random";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to my app!</h1>
        <p>
          This app is going to be a chat app.
        </p>
        <p>Today is {getCurrentDate()}</p>
        <p>Your unique id is: {getId()}</p>
        <p>Name of the day is: {getRandomName()}</p>
        <p>Color of the day is: {getRandomColor()}</p>
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
