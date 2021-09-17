export default function getRandomName() {
  const names = ["Otto", "Kimi", "Charles", "Roko", "Gigi", "Manu", "Alex", "Peter"];
  const namesResult = names[Math.floor(Math.random() * names.length)];
  return namesResult;
}