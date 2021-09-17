export function getRandomName() {
  const names = ["Otto", "Kimi", "Charles", "Roko", "Gigi", "Manu", "Alex", "Peter"];
  const namesResult = names[Math.floor(Math.random() * names.length)];
  return namesResult;
}

export function getRandomColor() {
  const colors = ["yellow", "blue", "magenta", "green", "lime", "grey", "white", "black"];
  const colorResult = colors[Math.floor(Math.random() * colors.length)];
  return colorResult;
}

const RANDOM = "RANDOM";

export default RANDOM; // ILI export default "RANDOM"; ali bolji je lijevi pristup