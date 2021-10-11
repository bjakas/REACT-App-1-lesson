import { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import { MessageWithHoc as Message } from "../../components/Message"; // nazvali smo ga Message (dali smo mu alias) da dolje ne moramo mijenjati naziv componente
import "./MessageList.css";

export default function MessageList() {
  const chatContext = useContext(ChatContext);

  return (
    <div className="MessageList">
      {chatContext.messageObjects.length === 0 &&
        <div className="MessageList__item">No messages</div>
      }
      {chatContext.messageObjects.map((messageObject, index) =>
        <div className="MessageList__item" key={index}>
          <Message
            isImportant={messageObject.isImportant}
            message={messageObject.message}
            title={messageObject.title}
          />
        </div>
      )}
    </div>
  )
}