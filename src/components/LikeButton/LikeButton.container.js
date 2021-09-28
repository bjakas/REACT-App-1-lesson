import { useState } from "react"; 
import LikeButtonComponent from "./LikeButton.component";

export default function LikeButtonContainer() {
  // let count = 0; // ova var ne čini stanje, a nama treba stanje koje utječe na komponentu, za to nam treba state da komponeti kažemo da je došlo do promjene
  const [count, setCount] = useState(0); // postavimo stanje uz hook useState; hook je funkcija koja prima parametre ovisno o tome kakav hook koristimo i vraća nam nazad najćešče objekt ili niz objekata s kojima imamo odvojeni state; prvi argument je state - count, drugi je funkcija koja mijenja state - setCount

  const incrementCount = () => { // arrow f. se vežu uz kontekst uz koji su definirane tako da će se this od a. f. odnositi baš na ovaj like button pa je dobro njih koristiti
    // console.log("click");
    // count++;
    // console.log(count);
    setCount(count + 1); // funkcija za promjenu stanja; promijeni mi count na vrijednost koja je jednaka trenutnom countu povećanom za 1
    console.log(count); // klikom na button ispišu se klikovi
  };

  return (<LikeButtonComponent // ubacimo LikeButtonComponent
    count={count} // brojaču dodijelimo count
    incrementCount={incrementCount} // kada se stisne button dodijelimo funkciju incrementCount; mi tu predamo funkciju koja će se pozvati kada se klikne na button, znači tu ne pozivamo funkciju
    /> // bitno zatvoriti s kosom crtom da zna da nema children elemente ova komponenta!
    );
}