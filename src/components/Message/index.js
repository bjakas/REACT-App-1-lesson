import { Children } from "react";
import UserInfo from "../UserInfo";
import UniqueId from "../UniqueId";
import CurrentDate from "../CurrentDate";
import "./Message.css";

export default function Message({
  isImportant, message, title, children
}) {
  if (message === "" || message == null) {
    return null;
  }

  let className = "Message";
  if (isImportant) className += " Message--important";

  return (
    <div className={className}>
      <div className="Message__title">{title}</div>
      <div className="Message__text">{message}</div>
      {children}
    </div>
  );
}

function withUserInfo(Component) {
  return function (props) {
    const children = [
      ...Children.toArray(props.children),
      <UserInfo key="user-info" />
    ];

    return <Component {...props}>{children}</Component>;
  };
}

function withUniqueId(Component) {
  return function (props) {
    const children = [
      ...Children.toArray(props.children),
      <UniqueId key="unique-id" />
    ];

    return <Component {...props}>{children}</Component>;
  };
}

function withCurrentDate(Component) {
  return function (props) {
    const children = [
      ...Children.toArray(props.children),
      <CurrentDate key="current-date" />
    ];

    return <Component {...props}>{children}</Component>;
  };
}

export const MessageWithHoc =
  withUserInfo(withUniqueId(withCurrentDate(Message)));


// OLD CODE

// import { Children } from "react";
// import UserInfo from "../UserInfo";
// import UniqueId from "../UniqueId";
// import CurrentDate from "../CurrentDate"
// import "./Message.css";
// //import { Component } from "react";

// export default function Message({ isImportant, message, title, children }) { // message prima i children da može prikazati child elemente
//   if (message === '' || message == null) { // poruku prikazujemo samo ako je message prazan string ili ako message nije null
//     return null; // ako je gornje točno vraćamo null pa se komponenta neće crtati
//   }

//   // dodijelimo classe pa u css-u stiliziramo
//   let className = "Message"; // po def. calssu message dajemo
//   if (isImportant) className += " Message--important"; // ako je postavljen isImportant onda ćemo po defaultu na taj className još nadopisati message--important po BEM-u 
//   // const className = isImportant ? "important-message" : "message";

//   /**
//    * iz returna smo maknuli
//    * 
//    * <div className="Message__author"><UserInfo /></div>
//       <div className="Message__id"><UniqueId /></div>
//       <div className="Message__date"><CurrentDate /></div>
//    */

//   return (
//     <div className={className}>
//       <div className="Message__title">{title}</div>
//       <div className="Message__text">{message}</div>
//       {children}
//     </div>
//   );
// }

// // HOC prima componentu i rendera ju u paru s UserInfo componentom
// // kada koristimo HOC onda je HOC zadužen za to da propusti propse do componente

// function withUserInfo(Component) {
//   return function (props) {
//     const children = [
//       ...Children.toArray(props.children),
//       <UserInfo key="user-info" />
//     ];
//     return (
//       //console.log("withUserInfo", props),
//       <Component {...props}>{children}</Component> // ispisat će se child withUserInfo
//     );
//   }
// }

// // HOC prima componentu i rendera ju u paru s UniqueId componentom

// function withUniqueId(Component) {
//   return function (props) {
//     const children = [
//       ...Children.toArray(props.children),
//       <UniqueId key="unique-id" />
//     ];
//     return (
//       //console.log("withUniqueId", props),
//       <Component {...props}>{children}</Component> // ako želimo da komponenta dobije propse moramo ih i proslijediti 
//     )
//   }
// }

// // HOC prima componentu i rendera ju u paru s CurrentDate componentom

// function withCurrentDate(Component) {
//   return function (props) {
//     const children = [
//       ...Children.toArray(props.children),
//       <CurrentDate key="current-date" />
//     ];
//     return (
//       //console.log("withCurrentDate", props),
//       <Component {...props}>{children}</Component>
//     )
//   }
// }

// // named export MessageWithHoc componente koja koristi sve HOC na message componenti
// // HOK-ove nižemo jedan u drugi

// export const MessageWithHoc = withUserInfo(
//   withUniqueId(
//     withCurrentDate(Message)
//   )
// );

//   // DZ probajte naći rješenje kako prikazati children props od svih HOC-ova (jer smo trenutno prepisali preko i svaka naredna componenta prepisuje prethodni children, trebamo vidjeti kako sačuvati taj children); 
//   // react.children, cloneElement, render props, itd; https://reactjs.org/docs/react-api.html; https://medium.com/@justynazet/passing-props-to-props-children-using-react-cloneelement-and-render-props-pattern-896da70b24f6
