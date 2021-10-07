import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContext from "./contexts/AppContext"; // sada čitava aplikacija ima pristup contextu // da ne dobijemo grešku trebamo definirati vrijednost koju će naš provider provideat
import { getId } from "./helpers"; // tu dobijemo fiksni ID koji se ne mijenja


// provider može providati fiksni value=({ language: "hr", id: getId() }), ali može providati i state, neko stanje aplikacije koje može biti dostupno na globalnijoj razini

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={{ language: "hr", id: getId() }}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
