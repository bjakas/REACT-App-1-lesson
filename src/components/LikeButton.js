import { useState } from "react"; 

export default function LikeButton() {
  const [count, setCount] = useState(0); // postavimo stanje

  const incrementCount = () => {
    setCount(count + 1); // funkcija za promjenu stanja
    console.log(count); // klikom na button ispišu se klikovi
  };

  return <button onClick={incrementCount}>Likes: {count}</button>
}