import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import MessageList from "../../containers/MessageList";
import MessageForm from "../../containers/MessageForm";
import ChatContext from "../../contexts/ChatContext";
import "./ChatPage.css";

export default function ChatPage() {
  const appContext = useContext(AppContext);
  const chatContext = useContext(ChatContext);

  return (
    <div className="ChatPage">
      <header className="ChatPage__title">
        <h1>My Chat App {appContext.language}</h1>
      </header>
      <main className="ChatPage__main">
        <div className="ChatPage__list">
          <MessageList />
        </div>
        <div className="ChatPage__form">
          <MessageForm onSendMessage={chatContext.handleSendMessage} />
        </div>
      </main>
      <footer className="ChatPage__footer">
        <a
          href="https://github.com/dstrekelj"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub Profile
        </a>
      </footer>
    </div>
  );
}