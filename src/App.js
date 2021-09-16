import logo from './logo.svg';
import './App.css';
import * as dayjs from "dayjs";
import { nanoid } from "nanoid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to my app!</h1>
        <p>
          This app is going to be a chat app.
        </p>
        <p>Today is {dayjs().format("MMMM DD YYYY, HH:mm:ss")}</p>
        <p>Your unique id is: {nanoid()}</p>
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
