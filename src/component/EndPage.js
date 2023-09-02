import React from "react";
import { useLocation } from "react-router-dom";
import "../EndPage.css";
function EndPage() {
  const location = useLocation();
  const { questions, userAnswers } = location.state || {};

  const calculateScore = () => {
    if (!questions || !userAnswers || questions.length !== userAnswers.length) {
      return "N/A";
    }

    const correctAnswers = questions.filter(
      (question, index) => userAnswers[index] === question.correct_answer
    );

    return `${correctAnswers.length} / ${questions.length}`;
  };

  return (
    <div className="end-page">
      <h1>Quiz Completed</h1>
      <h2>Your Score: {calculateScore()}</h2>
      <div className="report">
        {questions &&
          userAnswers &&
          questions.map((question, index) => (
            <div key={index} className="question-report">
              <p className="questionsNumber">
                Question {index + 1}: {question.question}
              </p>
              <div>
                <p>
                  User's Answer:{" "}
                  {userAnswers[index] === undefined ||
                  userAnswers[index] === "visited"
                    ? "N/A"
                    : userAnswers[index]}
                </p>
                <p>Correct Answer: {question.correct_answer}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EndPage;
