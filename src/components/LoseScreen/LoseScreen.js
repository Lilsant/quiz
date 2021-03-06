import React from "react";
import finalImage from "./finalImage.svg";
import "./LoseScreen.css";

export default function LoseScreen({ startNewGame, finalScore, backToMenu }) {
  return (
    <div className="result">
      <img className="result__message-img" src={finalImage} />
      <span className="result__message-title">Results</span>
      <span className="result__message-text">
        You got <span className="result__message-score">{finalScore}</span>{" "}
        correct answers
      </span>
      <div className="result__btn-container">
        <button
          onClick={() => {
            startNewGame();
          }}
          className="result__btn"
        >
          Try Again
        </button>
        <button
          onClick={() => {
            backToMenu();
          }}
          className="result__btn"
        >
          Back To Menu
        </button>
      </div>
    </div>
  );
}
