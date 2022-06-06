import React from "react";
import "./CountryMap.css";

import {
  YMaps,
  Map,
  Placemark,
  GeoObject,
  FullscreenControl,
} from "react-yandex-maps";

function MapY({ lat, lng }) {
  const mapData = {
    center: [lat, lng],
    zoom: 1,
  };
  return (
    <YMaps
      query={{
        ns: "use-load-option",
        load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
      }}
    >
      <div className="mapik">
        <Map className="mappp" defaultState={mapData}>
          <FullscreenControl options={{ float: "left" }} />
          <Placemark defaultGeometry={[lat, lng]} />
        </Map>
      </div>
    </YMaps>
  );
}

export default MapY;
