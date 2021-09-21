import { getRandomName, getRandomColor } from "../random";

export default function UserInfo() {
  const color = getRandomColor();
  return (
    <p>User name is: {getRandomName()} and his/her favourite color is: {" "} <span style={{ color: color }}>{color}</span></p>); /* style koristi objekt, ne koristi stringove */

  /* ILI 
  <p>User name is: {getRandomName()} and his/her favourite color is: <span style={{ color: getRandomColor() }}>color of these words!</span></p>);*/
}