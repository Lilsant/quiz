import React from "react";
import typeImg from "./type-img.png";

export default function GameTypeBox({ text, id, createQuestion }) {
  return (
    <div
      onClick={() => {
        createQuestion(id);
      }}
      className="start__type"
    >
      <img src={typeImg} className="start__type-img" />
      <span className="start__type-title">{text}</span>
    </div>
  );
}
