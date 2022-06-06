import React from "react";
import "./AnswerListItem.css";

export default function AnswerListItem({
  countryName,
  number,
  checkAnswer,
  rightId,
  wrongId,
}) {
  const alphabet = ["A", "B", "C", "D"];
  let classes = "answer__list-item ";
  if (rightId || wrongId) classes += " disabled ";
  if (rightId === number) classes += "right";
  if (wrongId === number) classes += "wrong";
  return (
    <div onClick={() => checkAnswer(countryName, number)} className={classes}>
      <span className="answer__item-number">{alphabet[number]}</span>
      {countryName.includes("http") ? (
        <span className="answer__item-text">
          <img src={countryName} className="answer__flag" />
        </span>
      ) : (
        <span className="answer__item-text">{countryName}</span>
      )}
    </div>
  );
}
