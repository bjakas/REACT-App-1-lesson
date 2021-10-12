export default function NasaImage({ title, url, explanation }) {
  return (
    <figure className="NasaImage">
      <img src={url} alt={title} />
      <figcaption>{explanation}</figcaption>
    </figure>
  );
}