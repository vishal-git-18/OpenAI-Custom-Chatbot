import React from 'react';
import '../styles/main.css';

const SampleQuestions = ({ onSelect }) => {
  const questions = [
    "What can you do?",
    "Tell me a joke.",
    "How's the weather today?",
    "Give me some advice."
  ];

  return (
    <div className="sample-questions">
      <div className="question-buttons">
        {questions.map((q, index) => (
          <button key={index} onClick={() => onSelect(q)}>
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SampleQuestions;
