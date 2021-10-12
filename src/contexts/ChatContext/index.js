import React from "react";

import { createContext, useState } from "react";

const ChatContext = createContext("ChatContext");

// u okviru contexta radimo provider koji svoj value definira sa stateom; naš ChatContextProvider sada brine o porukama i također nam daje metodu, tj. funkciju za postavljanje tih poruka u state i onda provider kaže da će bilo kojoj komponenti koja želi od mene uzimati vrijednosti dati i poruke i funkciju za promjenu poruka, a onda će naš (vidi u Pages/ChatPage) uzeti taj ChatContext i u messageform poslati naš handleSendMessage

export function ChatContextProvider({ children }) {
  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([...messageObjects, messageObject]);
  }

  return (
    <ChatContext.Provider value={{ messageObjects, handleSendMessage }}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatContext; // exportamo ga van

//const ChatContext = React.createContext([]); // ako želimo u context možemo dodati defaultValue; kreiramo novi context

/*

* primjer samo

export function ChatContextProvider(props) {
  const [state, setState] = React.useState();

  return <ChatContextProvider value={{state, setState}}>
    {props.children}
  </ChatContextProvider>
}
*/

