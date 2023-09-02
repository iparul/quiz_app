import React from "react";

function Question({ questionData, userAnswer, onAnswerSelect }) {
  const { question, correct_answer, incorrect_answers } = questionData;
  const answerChoices = [correct_answer, ...incorrect_answers];

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      <div className="options">
        {answerChoices.map((choice) => (
          <button
            key={choice}
            onClick={() => onAnswerSelect(choice)}
            className={userAnswer === choice ? "selected" : "notSelected"}
            style={{ marginRight: "5px" }}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
