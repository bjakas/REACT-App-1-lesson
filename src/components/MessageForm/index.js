import { useState } from "react";

export default function MessageForm({ onSendMessage }) {
  const [state, setState] = useState({message: "Lorem"}); // kako mijenjamo nešto u inputu mijenjamo state

  const setMessage = (event) => {
    setState({message: event.target.value}) // kako se promjena vrijednosti u inputu promijeni vrijednost iz inputa se spremi u message
  };

  const sendMessage = (event) => {
    // console.log(state); // ispišemo zadnje stanje u konzoli
    event.preventDefault();
    onSendMessage(state);
  };

  return(
    <form onSubmit={sendMessage}>
      <input type="text" onChange={setMessage} value={state.message} ></input>
      <button type="submit">Send</button>
    </form>
  );
}