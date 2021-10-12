export default function NasaVideo({ title, url, explanation }) { // pogledamo što imamo u objektu iz apija i dodamo u propse i isto stavimo i u image componentu
  return (
    <div className="NasaVideo">
      <iframe width="640" height="480" src={url} title={title} /> {/* za prikaz videa treba nam iframe */}
      <div>{title}</div>
      <div>{explanation}</div>
    </div>
  );
}