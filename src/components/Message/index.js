import UserInfo from "../UserInfo";
import UniqueId from "../UniqueId";
import CurrentDate from "../CurrentDate"
import "./Message.css";
//import { Component } from "react";

export default function Message({ isImportant, message, title, children }) {
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
      <div className="Message__text">{message}</div>
      {children}
      <div className="Message__author"><UserInfo /></div>
      <div className="Message__id"><UniqueId /></div>
      <div className="Message__date"><CurrentDate /></div>
    </div>
  );
}

function withUserInfo(Component) {
  return function(props) { 
    return (
    console.log("withUserInfo", props),
    <Component {...props}>withUserInfo</Component>
    );
  }
}

function withUniqueId(Component) {
  return function(props)
   { return (
    console.log("withUniqueId", props),
     <Component {...props}>withUniqueId</Component>
   )
     }
}

function withCurrentDate(Component) {
  return function(props)
   { return (
    console.log("withCurrentDate", props),
     <Component {...props} />
   )
    }
}

export const MessageWithHoc = withUserInfo(
  withUniqueId(
    withCurrentDate(Message)
    )
  );

  // DZ probajte naći rješenje kako prikazati children props od svih HOC-ova; cloneElement, render props, itd; https://reactjs.org/docs/react-api.html; https://medium.com/@justynazet/passing-props-to-props-children-using-react-cloneelement-and-render-props-pattern-896da70b24f6
