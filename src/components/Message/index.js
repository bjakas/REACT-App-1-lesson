import UserInfo from "../UserInfo";
import UniqueId from "../UniqueId";
import CurrentDate from "../CurrentDate"
import "./Message.css";

export default function Message({ isImportant, message, title }) {
  if (message === '' || message == null) { // poruku prikazujemo samo ako je message prazan string ili ako message nije null
    return null; // ako je gornje točno vraćamo null pa se komponenta neće crtati
  }

  // dodijelimo classe pa u css-u stiliziramo
  let className = "Message"; // po def. calssu message dajemo
  if (isImportant) className += " Message--important"; // ako je postavljen isImportant onda ćemo po defaultu na taj className još nadopisati message--important po BEM-u 
  // const className = isImportant ? "important-message" : "message";

  return (
    <div className={className}>
      <div className="Message__title">{title}</div>
      <div className="Message__author"><UserInfo /></div>
      <div className="Message__id"><UniqueId /></div>
      <div className="Message__text">{message}</div>
      <div className="Message__date"><CurrentDate /></div>
    </div>
  );
}