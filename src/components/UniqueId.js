import { useContext } from "react";
import AppContext from "../contexts/AppContext"; // dobijemo uvijek isti ID jer smo u index.js stavili u context provider ID

export default function UniqueId() {
  const appContext = useContext(AppContext);

  return <p>UID: {appContext.id}</p>;
}