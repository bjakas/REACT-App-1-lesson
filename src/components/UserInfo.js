import { getRandomName, getRandomColor } from "../random";
import Greet from "./Greet"; // prvo importamo Greet da ga možemo koristiti

export default function UserInfo() {
  const color = getRandomColor();
  return (
    <Greet greeting={"Hello"} name={getRandomName()}>
      (Color: <span style={{ color: color }}>{color}</span>)
    </Greet>
  );
}

// child od Greeta nam postaje Your color is <span style={{ color: color }}>{color}</span>

// style koristi objekt, ne koristi stringove 

// div ne možemo staviti unutar paragrafa pa smo maknuli p i stavili samo sve unutar parent elementa <Greet>, a možemo umjesto <p> koristiti <div> jer <div> ne možemo staviti unutar <p>

/* DRUGI PRIMJER ZA STYLE
  <div>User name is: {getRandomName()} and his/her favourite color is: <span style={{ color: getRandomColor() }}>color of these words!</span></div>);
*/

