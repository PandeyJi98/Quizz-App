import React, { useState } from "react";
import "./style.css"

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "London", isCorrect: false },
        { answerText: "Madrid", isCorrect: false },
      ],
    },
    {
      questionText: "What is the largest country in the world?",
      answerOptions: [
        { answerText: "Russia", isCorrect: true },
        { answerText: "Canada", isCorrect: false },
        { answerText: "China", isCorrect: false },
        { answerText: "United States", isCorrect: false },
      ],
    },

    {
      questionText: "The world famous 'Khajuraho' sculptures are located in",
      answerOptions: [
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Jaipur", isCorrect: false },
        { answerText: "Gujrat", isCorrect: false },
        { answerText: "Madhya Pradesh", isCorrect: true },
      ],
    },

    {
      questionText: "National Police Academy is located at",
      answerOptions: [
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Jaipur", isCorrect: false },
        { answerText: "Gujrat", isCorrect: false },
        { answerText: "Hyderabad", isCorrect: true },
      ],
    },
    
    {
      questionText: "Where is the Railway Staff College located?",
      answerOptions: [
        { answerText: "Delhi", isCorrect: false },
        { answerText: "Vadodara", isCorrect: true },
        { answerText: "pune", isCorrect: false },
        { answerText: "Gorakhpur", isCorrect: false },
      ],
    },
    
    {
      questionText: "Golden Temple is situated in?",
      answerOptions: [
        { answerText: "Amritsar", isCorrect: true },
        { answerText: "Agra", isCorrect: false },
        { answerText: "New Delhi", isCorrect: false },
        { answerText: "Patna", isCorrect: false },
      ],
    },

    {
      questionText: "What is the currency of Japan?",
      answerOptions: [
        { answerText: "Dollar", isCorrect: false },
        { answerText: "Pound", isCorrect: false },
        { answerText: "Euro", isCorrect: false },
        { answerText: "Yen", isCorrect: true },
      ],
    },

    {
      questionText: "Which city is known as 'Electronic City of India'?",
      answerOptions: [
        { answerText: "Gurgaon", isCorrect: false },
        { answerText: "Mumbai", isCorrect: false },
        { answerText: "Delhi", isCorrect: false },
        { answerText: "Bangalore", isCorrect: true },
      ],
    },

    {
      questionText: "Which is known as 'Garden City of India'?",
      answerOptions: [
        { answerText: "Gurgaon", isCorrect: false },
        { answerText: "Jaipur", isCorrect: false },
        { answerText: "Goa", isCorrect: false },
        { answerText: "Bangalore", isCorrect: true },
      ],
    },

    {
      questionText: "Badrinath is situated on the bank of river",
      answerOptions: [
        { answerText: "Ganga", isCorrect: false },
        { answerText: "Alaknanda", isCorrect: true },
        { answerText: "Yamuna", isCorrect: false },
        { answerText: "Saraswathi", isCorrect: false },
      ],
    },
  ];

  

  function handleAnswerButtonClick(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setShowResults(true);
    }
  }

  function handleRestartButtonClick() {
    setQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  }

  return (
    <div className="parent">
      <div>
      <h1 style={{color:'purple'}}>Quiz App</h1>

      </div>
      <div className="child">
      {showResults ? (
        <div>
          <h2 style={{color:'yellow'}}>Results:</h2>
          <p style={{color:'Green', fontSize:"25px"}}>You scored {score} out of {questions.length}.</p>
          <button className="option" onClick={handleRestartButtonClick}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2 style={{color:'yellow'}}>Question {questionIndex + 1}</h2>
          <p style={{color:'red', fontSize:"30px"}}>{questions[questionIndex].questionText}</p>
          {questions[questionIndex].answerOptions.map((answerOption, index) => (

            <button className="option" key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
              {answerOption.answerText}

            </button>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
