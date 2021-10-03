import React from "react";

const AppContext = React.createContext(); // ako želimo u context možemo dodati defaultValue


export default AppContext;

// možemo ih exportat i kao nameane 
// export const AppProvider = AppContext.Provider;
// export const AppConsumer = AppContext.Consumer;