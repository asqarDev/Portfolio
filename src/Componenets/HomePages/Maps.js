import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { statesData } from "./MapData";

export const Maps = () => {
  const center = [42.062152156516724, 64.32795172389777];
  return (
    <>
      <MapContainer
        center={center}
        zoom={6}
        style={{ width: "100%", height: "60vh" }}
      >
        <TileLayer url="https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}.png?key=BmKmXXsz6KBqsjclqq23" />

        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          return (
            <Polygon
              pathOptions={{
                // fillColor: "#FD8D3C",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                // color: "white"
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",

                    // color: "white",
                  });
                },
                mouseout: (e) => {},
                click: (e) => {},
              }}
            />
          );
        })}
      </MapContainer>
    </>
  );
};
