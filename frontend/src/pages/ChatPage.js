import React, { useEffect, useState } from 'react';
import SampleQuestions from '../components/SampleQuestions';
import ChatMessage from '../components/ChatMessage';
import { getTestResponse } from '../api/test/testApi';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSampleQuestionClick = async (question) => {
    setLoading(true);
    // Add user's message to messages
    setMessages((prev) => [...prev, { type: 'user', text: question }]);
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

  return (
    <div className="chat-page">
      <h1>OpenAI Custom Chatbot</h1>
      <SampleQuestions onSelect={handleSampleQuestionClick} />
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} type={msg.type} text={msg.text} />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ChatPage;
