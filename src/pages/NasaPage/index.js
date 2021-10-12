import { useEffect, useState } from "react";

function NasaVideo({ title, url, explanation }) {
  return (
    <div className="NasaVideo">
      <iframe width="640" height="480" src={url} title={title} />
      <div>{title}</div>
      <div>{explanation}</div>
    </div>
  );
}

function NasaImage({ title, url, explanation }) {
  return (
    <figure className="NasaImage">
      <img src={url} alt={title} />
      <figcaption>{explanation}</figcaption>
    </figure>
  );
}

export default function NasaPage() {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          setError(response);
        }
      })
      .then(json => setState(json))
      .catch(error => setError(error));
  }, []);

  if (state === null) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>Something went wrong!</div>
  }

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