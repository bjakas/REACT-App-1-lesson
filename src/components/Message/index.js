import UserInfo from "../UserInfo";
import UniqueId from "../UniqueId";
import CurrentDate from "../CurrentDate"
import "./Message.css";

export default function Message({isImportant, message, title}) {
  if (message === '' || message == null) { // poruku prikazujemo samo ako je message prazan string ili ako message nije null
    return null; // ako je gornje točno vraćamo null pa se komponenta neće crtati
  }

  // dodijelimo classe pa u css-u stiliziramo
  let className = "message"; // po def. calssu message dajemo
  if (isImportant) className += " message--important"; // ako je postavljen isImportant onda ćemo po defaultu na taj className još nadopisati message--important po BEM-u 
  // const className = isImportant ? "important-message" : "message";

  return( 
    <div className={className}>
      <div>
        {title}
      </div>
      <div>
        <UserInfo/>
      </div>
      <div>
        <UniqueId/>
      </div>
      <div>
        {message}
      </div>
      <div>
        <CurrentDate/>
      </div>
    </div>
  );
}