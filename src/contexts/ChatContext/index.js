import React from "react";

const ChatContext = React.createContext([]); // ako želimo u context možemo dodati defaultValue; kreiramo novi context

/*

* primjer samo

export function ChatContextProvider(props) {
  const [state, setState] = React.useState();

  return <ChatContextProvider value={{state, setState}}>
    {props.children}
  </ChatContextProvider>
}
*/

export default ChatContext; // exportamo ga van