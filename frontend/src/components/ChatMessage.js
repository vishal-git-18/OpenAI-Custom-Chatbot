import React from 'react';
import '../styles/main.css';

const ChatMessage = ({ type, text }) => {
  return (
    <div className={`chat-message ${type}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
