import React from "react";
import AnswerListItem from "../AnswerListItem/AnswerListItem";
import "./AnswerList.css";
export default function AnswerList({
  countryList,
  checkAnswer,
  rightId,
  wrongId,
  number,
  flag,
  country,
  capital,
}) {
  const listItems = countryList.map((el, i) => {
    return (
      <li>
        <AnswerListItem
          rightId={rightId}
          wrongId={wrongId}
          countryName={el}
          number={i}
          checkAnswer={checkAnswer}
        />
      </li>
    );
  });
  const questions = [
    null,
    `${country} flag is`,
    ` is the flag of`,
    `${country} capital is`,
    `${capital} is capital of `,
  ];
  return (
    <>
      {number == 2 ? (
        <span className="playground__question">
          <img className="playground__flag" src={flag} />
          {questions[number]}
        </span>
      ) : (
        <span className="playground__question">{questions[number]}</span>
      )}
      <ul className="answer__list">{listItems}</ul>;
    </>
  );
}
