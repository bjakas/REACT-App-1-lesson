import { useState } from "react";
import PropTypes from "prop-types";
import "./MessageForm.css";

export default function MessageForm({ onSendMessage }) {
  const [state, setState] = useState({
    message: "",
    isImportant: false, 
    title: ""
  }); // kako mijenjamo nešto u inputu mijenjamo state

  const setTitle = (event) => {
    setState({ ...state, title: event.target.value}) 
  };

  const setMessage = (event) => {
    setState({ ...state, message: event.target.value}) // kako se promjena vrijednosti u inputu promijeni vrijednost iz inputa se spremi u message; spread operator - napravili smo kopiju postojećeg objekta tako što smo preselili postojeće vrijednosti iz state objekta u novi prazni objekt

    /* 

    - setState ima dva oblika, u prvom proslijedimo state, a u drugom imamo funkcijski oblik, tj. proslijedimo funkciju
    
    FUNKCIJSKI OBLIK setState - bolji pristup, otporniji na greške od gornjeg; ne koristimo ništa van funkcije pa je otpornije na greške
    const setMessage = (event) => {
      setState((currentState) => {
        return { ...currentState, message: event.target.value};
      });
    };
    */
  };
  
  const setIsImportant = (event) => { // postavi mi je li important ili nije
    // console.log(event);
    // console.log(state);
    setState( { ...state, isImportant: event.target.checked} ); // spread operator; isImportant se mijenja s obzirom na checked atribut input elementa, našeg event targeta; sa isImportant prepišemo preko ...statea (sa spread operatorom kopiramo postojeće vrijednosti i onda prepišemo preko njih sa isImportant) da nam se kad checkiramo kućicu prikazuje stanje i ne odtikava kućica, da se zapamti vrijednost kada upisujemo novi tekst, a ne da se makne tick
  };

  const sendMessage = (event) => {
    console.log(state); // ispišemo zadnje stanje u konzoli
    // console.log(event); // ispišemo event - SyntheticBaseEvent
    event.preventDefault(); // spriječili smo refresh stranice
    onSendMessage(state); // props koji je funkcija i pozovemo ju sa stateom našeg obrasca
  };

  // obrazac koji reagira na submit event i ima inpute; vrijednost inputa se povlači iz statea, a putem onChangea obavještavaju o promjeni

  return (
    <form className="MessageForm" onSubmit={sendMessage}>
      <div className="MessageForm__row">
        <input
          type="text"
          onChange={setTitle}
          value={state.title}
          placeholder="Title"
        />
      </div>
      <div className="MessageForm__row">
        <input
          type="text"
          onChange={setMessage}
          value={state.message}
          placeholder="Message"
        />
      </div>
      <div className="MessageForm__row">
        <label>
          <input
            type="checkbox"
            onChange={setIsImportant}
            value="isImportant"
            checked={state.isImportant}
          />
          Important
        </label>
      </div>
      <div className="MessageForm__row">
        <button type="submit">Send</button>
      </div>
    </form>
  );
}


MessageForm.propTypes = { // MessageForm ima proptype koji se zove onSendMessage i on mora biti funkcija
  onSendMessage: PropTypes.func,
}