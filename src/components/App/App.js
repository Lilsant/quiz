import React, { useEffect, useState } from "react";
import Playground from "../Playground/Playground";
import "./App.css";

export default function App() {
  const [isDone, setIsDone] = useState(false);
  // const [mainCountryCapital, setMainCountryCapital] = useState();
  const [mainCountry, setMainCountry] = useState();
  // const [mainCountryInfo, setMainCountryInfo] = useState();
  // const [mainCountryName, setMainCountryName] = useState();
  // const [countryArr, setCountryArr] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setMainCountry(data);
        // createQuestion(data);
      })
      .then(() => {
        setIsDone(true);
      });
  }, []);

  // function setNext() {
  //   createQuestion(mainCountry);
  // }

  // function createQuestion(data) {
  //   let mainNumber = getRandomFloat();
  //   setMainCountryInfo(data[mainNumber]);
  //   setMainCountryCapital(data[mainNumber].capital);
  //   setMainCountryName(data[mainNumber].name.common);
  //   setCountryArr(
  //     [
  //       data[getRandomFloat()].name.common,
  //       data[mainNumber].name.common,
  //       data[getRandomFloat()].name.common,
  //       data[getRandomFloat()].name.common,
  //     ].sort(() => Math.random() - 0.5)
  //   );
  // }

  // function startTheNewGame() {
  //   createQuestion(mainCountry);
  // }

  function getRandomFloat() {
    return Math.floor(Math.random() * (252 - 1) + 1);
  }

  return (
    <main className="app">
      {isDone ? (
        <Playground
          // mainCountryCapital={mainCountryCapital}
          // mainCountryName={mainCountryName}
          // countryArr={countryArr}
          // setNext={setNext}
          // startTheNewGame={startTheNewGame}
          // mainCountryInfo={mainCountryInfo}
          data={mainCountry}
        />
      ) : null}
    </main>
  );
}
