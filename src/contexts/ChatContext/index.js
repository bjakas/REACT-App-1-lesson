import React from "react";

import { createContext, useState } from "react";

const ChatContext = createContext("ChatContext");

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

