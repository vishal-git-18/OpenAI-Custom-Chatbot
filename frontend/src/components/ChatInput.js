// src/components/ChatInput.js
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';  

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="send-button">
        <FiSend size={20} />
      </button>
    </form>
  );
};

export default ChatInput;
