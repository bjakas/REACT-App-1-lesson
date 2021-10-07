import { useContext } from "react";
import AppContext from "../contexts/AppContext"; // dobijemo uvijek isti ID jer smo u index.js stavili u context provider ID

export default function UniqueId() {
  const appContext = useContext(AppContext); // useContext hook primi naš context objekt, koji se interno bavi s consumerom i vrati nazad value tog contexta tj. property id (vidi glavni index.js) i vrati nam UID

  return <p>UID: {appContext.id}</p>;
}