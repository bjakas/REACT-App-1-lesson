import { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import {MessageWithHoc as Message} from "../../components/Message"; // nazvali smo ga Message (dali smo mu alias) da dolje ne moramo mijenjati naziv componente

export default function MessageList() {
  const messageObjects = useContext(ChatContext);
  console.log(messageObjects);

  return (
    <div className="MessageList">
      {messageObjects.length === 0 && <p>No messages</p>}
      {
        messageObjects.map((messageObject, index) =>
          <Message
            key={index}
            isImportant={messageObject.isImportant}
            message={messageObject.message}
            title={messageObject.title}
          />
        )
      }
    </div>
  )
}