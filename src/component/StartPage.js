import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StartPage.css";
function StartPage() {
  const [email, setEmail] = useState("");
  const navigation = useNavigate();

  const handleSubmit = () => {
    if (email !== "") {
      navigation("/quiz");
    } else {
      alert("Please enter Email");
    }
  };

  return (
    <div className="start-page">
      <div className="first-section">
        <div className="welcome-meg">Welcome to the Quiz App </div>
        <div className="first-duSize">
          <div className="duration">
            <div>Test Duration</div>
            <div>30 mins</div>
          </div>
          <div className="size">
            <div>Test Size</div>
            <div> 15 questions</div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="enterEmail">Enter Email</div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="emailText"
        />
        <button onClick={handleSubmit} className="enterButton">
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default StartPage;
