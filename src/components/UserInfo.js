import { getRandomName, getRandomColor } from "../random";

export default function UserInfo() {
  return (
  <p>User name is: {getRandomName()} and his/her favourite color is: <span style={{ color: getRandomColor() }}>color of these words!</span></p>);
}