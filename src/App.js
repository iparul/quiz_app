import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import StartPage from "./component/StartPage";
import EndPage from "./component/EndPage";
import Quiz from "./component/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<StartPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/end" element={<EndPage />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
