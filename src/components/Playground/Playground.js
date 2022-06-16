import React, { useEffect, useState } from "react";
import AnswerList from "../AnswerList/AnswerList";
import "./Playground.css";
import adventureMan from "./adventure-man.svg";
import LoseScreen from "../LoseScreen/LoseScreen";
import Info from "../Info/Info";
import StartScreen from "../StartScreen/StartScreen";

export default function Playground(props) {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const [isBtnDisable, setIsBtnDisable] = useState(true);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [score, setScore] = useState(0);
  const [rightId, setRightId] = useState(false);
  const [wrongId, setWrongId] = useState(false);
  const [rightAnswer, setRightAnswer] = useState();
  const [mainCountryCapital, setMainCountryCapital] = useState();
  const [mainCountryInfo, setMainCountryInfo] = useState();
  const [mainCountryName, setMainCountryName] = useState();
  const [mainCountryFlag, setMainCountryFlag] = useState();
  const [countryArr, setCountryArr] = useState();
  const [shit, setShit] = useState(false);
  const [numberTypeQuestion, setNumberTypeQuestion] = useState();

  function checkAnswer(cityName, id) {
    if (id === rightAnswer) {
      setRightId(id);
      setIsBtnDisable(false);
      setScore(score + 1);
    } else {
      setWrongId(id);
      setRightId(rightAnswer);
    }
  }

  function getRandomFloat() {
    return Math.floor(Math.random() * (252 - 1) + 1);
  }

  function setNext() {
    constructQuestion(numberTypeQuestion);
  }

  function constructQuestion(id) {
    setIsGameStarted(true);
    const mainNumber = getRandomFloat();
    setNumberTypeQuestion(id);
    setMainCountryInfo(props.data[mainNumber]);
    setMainCountryName(props.data[mainNumber].name.common);
    let countryArra;
    switch (id) {
      case 1:
        setMainCountryName(props.data[mainNumber].name.common);
        countryArra = [
          props.data[getRandomFloat()].flags.svg,
          props.data[getRandomFloat()].flags.svg,
          props.data[getRandomFloat()].flags.svg,
          props.data[mainNumber].flags.svg,
        ].sort(() => Math.random() - 0.5);
        countryArra.forEach((el, id) => {
          if (el === props.data[mainNumber].flags.svg) setRightAnswer(id);
        });
        setCountryArr(countryArra);
        setShit(true);
        break;
      case 2:
        setMainCountryFlag(props.data[mainNumber].flags.svg);
        countryArra = [
          props.data[getRandomFloat()].name.common,
          props.data[getRandomFloat()].name.common,
          props.data[getRandomFloat()].name.common,
          props.data[mainNumber].name.common,
        ].sort(() => Math.random() - 0.5);
        countryArra.forEach((el, id) => {
          if (el === props.data[mainNumber].name.common) setRightAnswer(id);
        });
        setCountryArr(countryArra);
        setShit(true);
        break;
      case 3:
        setMainCountryName(props.data[mainNumber].name.common);
        countryArra = [
          props.data[getRandomFloat()].capital,
          props.data[getRandomFloat()].capital,
          props.data[getRandomFloat()].capital,
          props.data[mainNumber].capital,
        ].sort(() => Math.random() - 0.5);
        countryArra.forEach((el, id) => {
          if (el === props.data[mainNumber].capital) setRightAnswer(id);
        });
        setCountryArr(countryArra);
        setShit(true);
        break;
      case 4:
        setMainCountryCapital(props.data[mainNumber].capital);
        countryArra = [
          props.data[getRandomFloat()].name.common,
          props.data[getRandomFloat()].name.common,
          props.data[getRandomFloat()].name.common,
          props.data[mainNumber].name.common,
        ].sort(() => Math.random() - 0.5);
        countryArra.forEach((el, id) => {
          if (el === props.data[mainNumber].name.common) setRightAnswer(id);
        });
        setCountryArr(countryArra);
        setShit(true);
        break;
    }
  }

  function gameOver() {
    setGameOver(true);
  }

  function backToMenu() {
    setIsGameStarted(false);
    setGameOver(false);
    setShit(false);
    setRightId(false);
    setWrongId(false);
    setScore(0);
  }

  const changeInfoWindowStatus = () => {
    setShowInfoWindow(!showInfoWindow);
  };

  const startNewGame = () => {
    setIsBtnDisable(true);
    setGameOver(false);
    setScore(0);
    setRightId(false);
    setWrongId(false);
    setNext();
  };

  return (
    <>
      <div className="playground">
        <h1 className="playground__title">COUNTRY QUIZ</h1>
        {!isGameStarted ? (
          <StartScreen createQuestion={constructQuestion} />
        ) : null}
        {isGameOver ? (
          <LoseScreen
            startNewGame={startNewGame}
            backToMenu={backToMenu}
            finalScore={score}
          />
        ) : (
          <>
            <img className="playground__image" src={adventureMan} />
            {shit ? (
              <AnswerList
                rightId={rightId}
                wrongId={wrongId}
                countryList={countryArr}
                checkAnswer={checkAnswer}
                number={numberTypeQuestion}
                flag={mainCountryFlag}
                capital={mainCountryCapital}
                country={mainCountryName}
              />
            ) : null}
            {wrongId >= 0 && wrongId !== false ? (
              <div>
                <button
                  onClick={() => {
                    changeInfoWindowStatus();
                  }}
                  className="playground__button playground__button--info"
                >
                  INFO
                </button>
                {showInfoWindow ? (
                  <Info
                    changeInfoWindow={changeInfoWindowStatus}
                    mainCountry={mainCountryInfo}
                  />
                ) : null}
                <button
                  onClick={() => {
                    gameOver();
                  }}
                  className="playground__button"
                >
                  RESULT
                </button>
              </div>
            ) : (
              <button
                disabled={isBtnDisable}
                onClick={() => {
                  setRightId(false);
                  setWrongId(false);
                  setIsBtnDisable(true);
                  setNext();
                }}
                className="playground__button"
              >
                NEXT
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
}
