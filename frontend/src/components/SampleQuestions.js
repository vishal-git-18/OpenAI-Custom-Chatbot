import '../styles/export.css';

const SampleQuestions = ({ onSelect }) => {
  const questions = [
    "Show me today's events",
    "How's the weather today?",
    "Make a dentist appointment at 3pm."
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
