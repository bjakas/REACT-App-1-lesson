import React from "react";

const AppContext = React.createContext(); // context imena AppContext smo reirali kroz metodu React.createContext(); ako želimo u context možemo dodati defaultValue;


export default AppContext; // context exportamo van

// možemo ih exportat i kao nameane 
// export const AppProvider = AppContext.Provider;
// export const AppConsumer = AppContext.Consumer;