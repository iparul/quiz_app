import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Question from "./Question";
import Navigation from "./Navigation";
import axios from "axios";
import "../Quiz.css";
function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(15).fill(undefined));
  const [timeRemaining, setTimeRemaining] = useState(30 * 60);
  const [loading, setLoading] = useState(false);
  const naviagation = useNavigate();

  useEffect(() => {
    fetchQuizQuestions();
  }, []);
  const fetchQuizQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=15");
      const { results } = response.data;
      setQuestions(results);
    } catch (error) {
      setQuestions([]);
      console.error("Error fetching quiz questions:", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (questions.length > 0) {
      const timer = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(timeRemaining - 1);
        } else {
          submitQuiz();
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeRemaining, questions]);

  const submitQuiz = () => {
    naviagation("/end", {
      state: { questions, userAnswers },
    });
  };

  const handleAnswerSelect = (selectedAnswer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);
  };
  const handleNavSelect = (index) => {
    const updatedUserAnswers = [...userAnswers];
    if (updatedUserAnswers[currentQuestion] == undefined) {
      updatedUserAnswers[currentQuestion] = "visited";
    }
    setUserAnswers(updatedUserAnswers);
    setCurrentQuestion(index);
  };
  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      <p className="timimg">
        Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}
      </p>
      {loading && <p>Loading...</p>}
      <Navigation
        questions={questions}
        userAnswers={userAnswers}
        setCurrentQuestion={setCurrentQuestion}
        handleNavSelect={handleNavSelect}
      />

      {questions.length > 0 && (
        <Question
          questionData={questions[currentQuestion]}
          userAnswer={userAnswers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
        />
      )}
      <button onClick={submitQuiz} className="submitButton">
        Submit Quiz
      </button>
    </div>
  );
}

export default Quiz;
