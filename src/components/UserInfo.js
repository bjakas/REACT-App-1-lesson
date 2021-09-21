import { getRandomName, getRandomColor } from "../random";
import Greet from "./Greet";

export default function UserInfo() {
  const color = getRandomColor();
  return (
      <Greet greeting="Hello" name={getRandomName()}>
      Your color is <span style={{ color: color }}>{color}</span>
      </Greet>
    ); 
    // style koristi objekt, ne koristi stringove 
    // div ne možemo staviti unutar paragrafa pa smo maknuli p i stavili samo sve unutar parent elementa

  /* ILI 
  <p>User name is: {getRandomName()} and his/her favourite color is: <span style={{ color: getRandomColor() }}>color of these words!</span></p>);*/
}

