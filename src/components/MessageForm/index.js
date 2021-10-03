import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import "./MessageForm.css";
import FormButton from "../FormButton";

export default function MessageForm({ onSendMessage }) {
  const [state, setState] = useState({
    message: "",
    isImportant: false,
    title: ""
  }); // kako mijenjamo nešto u inputu mijenjamo state

  // mi možemo imati samo jednu funkciju koja će rukovati sa promjenom na inputu i spremanju vrijednost u state - umjesto 3 razlicite funkcije setMessage, setIsImportant, setTitle zahvaljujući name-u (mora biti jedinstven unutar obrasca); dolje zamijenimo setTitle i ostale funkcije sa handleOnChange i ako radi to je to

  const handleOnChange = (event) => { // rukuj s onChange eventom
    let value = undefined; // value nije definiran

    if (event.target.type === "checkbox") { // kod checkboxa ne koristimo value, nego checked pa nam treba ovo; ako je event checkbox onda je value checked, ako nije onda je drugo
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    setState((currentState) => { // vrati current state, napravi njegovu kopiju i upiši na njegovo mjesto pod nameom našeg event targeta njegov value
      return {
        ...currentState,
        [event.target.name]: value
      };
    });
  }
  /*
    const setTitle = (event) => {
      setState({ ...state, title: event.target.value}) 
    };
  */

  /*
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
      
    };
    */
  /*
   const setIsImportant = (event) => { // postavi mi je li important ili nije
     // console.log(event);
     // console.log(state);
     setState( { ...state, isImportant: event.target.checked} ); // spread operator; isImportant se mijenja s obzirom na checked atribut input elementa, našeg event targeta; sa isImportant prepišemo preko ...statea (sa spread operatorom kopiramo postojeće vrijednosti i onda prepišemo preko njih sa isImportant) da nam se kad checkiramo kućicu prikazuje stanje i ne odtikava kućica, da se zapamti vrijednost kada upisujemo novi tekst, a ne da se makne tick
   };
 */

  const sendMessage = (event) => {
    console.log(state); // ispišemo zadnje stanje u konzoli
    // console.log(event); // ispišemo event - SyntheticBaseEvent
    event.preventDefault(); // spriječili smo refresh stranice
    onSendMessage(state); // props koji je funkcija i pozovemo ju sa stateom našeg obrasca
  };

  // obrazac koji reagira na submit event i ima inpute; vrijednost inputa se povlači iz statea, a putem onChangea obavještavaju o promjeni

  /** ne treba nam više jer imamo TextInput komponentu za title, za unos naslova
   *       <input
          type="text"
          onChange={setTitle}
          value={state.title}
          placeholder="Title"
        />
   * 
   */

  return (
    <form className="MessageForm" onSubmit={sendMessage}>
      <div className="MessageForm__row">
        <TextInput
          label={<div>Title:</div>}
          onChange={handleOnChange}
          value={state.title}
          inputProps={{
            name: "title", id: "title", placeholder: "title"
          }} />
      </div>
      <div className="MessageForm__row">
        <TextInput
          label={<div>Message:</div>}
          onChange={handleOnChange}
          value={state.message}
          inputProps={{
            name: "message", id: "message", placeholder: "message"
          }}
        />
      </div>
      <div className="MessageForm__row">
        <Checkbox
          label="Important"
          type="checkbox"
          onChange={handleOnChange}
          value="isImportant"
          checked={state.isImportant}
          inputProps={{
            name: "isImportant", id: "is-important"
          }}
        />
      </div>

      <div className="MessageForm__row">
        <FormButton type="submit">Send</FormButton>
      </div>
    </form>
  );
}


MessageForm.propTypes = { // MessageForm ima proptype koji se zove onSendMessage i on mora biti funkcija
  onSendMessage: PropTypes.func,
}