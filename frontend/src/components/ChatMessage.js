import '../styles/export.css';

const ChatMessage = ({ type, text }) => {
  return (
    <div className={`chat-message ${type}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
