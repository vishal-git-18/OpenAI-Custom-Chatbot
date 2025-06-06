import React, { useState, useRef, useEffect } from 'react';
import SampleQuestions from '../components/SampleQuestions';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { getTestResponse } from '../api/test/testApi';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSampleQuestionClick = (question) => {
    handleUserMessage(question);
  };

  const handleUserMessage = async (userMessage) => {
    if (!userMessage) return;
    setMessages((prev) => [...prev, { type: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const response = await getTestResponse();
      setMessages((prev) => [...prev, { type: 'bot', text: response }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { type: 'bot', text: 'Error fetching response.' }]);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <img src="/images/logo.jpeg" alt="Ohai AI" className="chat-logo" />
      <img src="/images/avatar.png" alt="Assistant Avatar" className="assistant-avatar" />
      <div className="chat-page">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <ChatMessage key={index} type={msg.type} text={msg.text} />
          ))}
          {loading && <p>Loading...</p>}
          <div ref={messagesEndRef} />
        </div>
        <div className="bottom-bar">
          <SampleQuestions onSelect={handleSampleQuestionClick} />
          <ChatInput onSend={handleUserMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
