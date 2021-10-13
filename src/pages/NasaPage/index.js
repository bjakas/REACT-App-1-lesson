import { useEffect, useState } from "react";
// import response from "./response.json" kako bismo response importali, ali to sada ne koristimo
import NasaVideo from "../../components/NasaVideo";
import NasaImage from "../../components/NasaImage";

// dohvaćamo sliku ili video dana s NASA-inog API-ja i prikazujemo ju u app-u; za to nam trebaju dvije manje komponente, jedna za video i jedna za image pa ćemo putem propsa birati što ćemo prikazati  -> componente se nalaze u components mapi


export default function NasaPage() {
  const [state, setState] = useState(null); // pripremimo state
  const [error, setError] = useState(null); // pripremimo state za grešku

  // za povezivanje na api treba nam useEffect (koji gore importamo); koristi ovaj efekt kada se nešto unutar ovog niza promijeni; prazan niz -> prvi put kad se komponenta inicira pozvat će se taj efekt
  // na useEffect kad se comp. mounta okinut ćemo fetch request, pretvorit ćemo response u json i json nećemo logat u consolu nego ćemo ga staviti kao response
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        if (response.ok) { // na temelju repsonse propertya ok znamo da je sve ok i vraćamo response.json i izvadimo ga vani i stavimo u state, ako nije ok else ispišemo response poruku za error, to je dodatna provjera koja nije nužna
          return response.json(); // dobijemo response i ispišemo ga u json // response možemo iz networka u dev toolsu kopirati i staviti u file response.json u mapi NasaPage da vidimo kako izgleda naš objekt i gore ga importamo
        } else {
          setError(response);
        }
      })
      .then(json => setState(json))
      .catch(error => setError(error)); // grešku spremimo u state
  }, []); // niz ako je prazan jednom se okine?

  // ako je state null dok se podatci još nisu povukli upišemo loading
  if (state === null) {
    return <div>Loading...</div>;
  }
  // ako početno stanje errora nije null, tj. ako smo dobili grešku ispisat ćemo poruku
  if (error !== null) {
    return <div>Something went wrong!</div>
  }

  // kako odabrati koju componentu prikazati; ako je response.media_type jednak video uzimamo NasaVideo, u protivnom uzimamo NasaImage i prikazujemo to u Componenti (response.title, response.explanation i response.url) -> kasnije smo response zamijenili sa state
  const Component = state.media_type === "video"
    ? NasaVideo
    : NasaImage;

  return (
    <div className="NasaPage">
      <h1>NASA</h1>
      <Component title={state.title}
        explanation={state.explanation}
        url={state.url}
      />
    </div>
  );
}