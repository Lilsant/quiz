import React from "react";
import GameTypeBox from "../GameTypeBox/GameTypeBox";
import "./StartScreen.css";

export default function StartScreen(props) {
  const gameTypes = [
    {
      id: 1,
      type: "Country by Flag",
    },
    {
      id: 2,
      type: "Flag by Country",
    },
    {
      id: 3,
      type: "Capital by Country",
    },
    {
      id: 4,
      type: "Country by Capital",
    },
  ];

  const gameTypesList = gameTypes.map((el) => {
    return (
      <GameTypeBox
        createQuestion={props.createQuestion}
        key={el.id}
        text={el.type}
        id={el.id}
      />
    );
  });
  return (
    <div className="start">
      <span className="start__title">Choose The Type Of Game</span>
      <div className="start__types-box">{gameTypesList}</div>
    </div>
  );
}
