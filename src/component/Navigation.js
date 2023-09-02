import React from "react";
import "../App.css";
function Navigation({
  questions,
  userAnswers,
  setCurrentQuestion,
  handleNavSelect,
}) {
  return (
    <div className="navigation">
      {questions.map((_, index) => {
        const isVisited = userAnswers[index] !== undefined;

        const buttonClass = isVisited
          ? userAnswers[index] !== "visited"
            ? "visited-selected"
            : "visited-not-selected"
          : "not-visited";

        return (
          <button
            key={index}
            className={buttonClass}
            onClick={() => handleNavSelect(index)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default Navigation;
