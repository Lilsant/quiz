import React from "react";

import "./Info.css";
import MapY from "../Map/CountryMap";
export default function Info({ mainCountry, changeInfoWindow }) {
  console.log(mainCountry);

  function getCurrencies(curs) {
    for (let cur in curs) {
      return `${curs[cur].name} , ${curs[cur].symbol}`;
    }
  }

  function getLanguages(langs) {
    for (let lang in langs) {
      return `${lang}  `;
    }
  }

  return (
    <div className="info">
      <button
        onClick={() => {
          changeInfoWindow();
        }}
        className="info__close-btn"
      ></button>
      <div className="info__visual">
        <div className="info__country">
          <h3 className="info__title">{mainCountry.name.common}</h3>
          <img className="info__flag-img" src={mainCountry.flags.svg}></img>
          <ul className="info__list">
            <li className="info__list-item">Столица: {mainCountry.capital}</li>
            <li className="info__list-item">Регион: {mainCountry.region}</li>
            <li className="info__list-item">
              Население: {mainCountry.population}
            </li>
            <li className="info__list-item">
              Язык: {getLanguages(mainCountry.languages)}
            </li>
            <li className="info__list-item">
              Валюта: {getCurrencies(mainCountry.currencies)}
            </li>
          </ul>
        </div>
        <MapY lat={mainCountry.latlng[0]} lng={mainCountry.latlng[1]} />
      </div>
      <div className="info__main"></div>
    </div>
  );
}
