import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "./mapStyle.css";

const MapSection = () => {
  return (
    <MapContainer
      center={[44.98344, 15.89883]}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker
        position={[44.98344, 15.89883]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }>
        <Popup>
          <a href='https://www.google.com/maps/dir//limomonta%C5%BEa+lepuzanovi%C4%87+cazin+radno+vrijeme/@44.896897,15.7309519,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x476149baa3f956cb:0x64bcc2b16460adf2!2m2!1d15.8992731!2d44.9833465?hl=bs'>
            Klikni za upute
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSection;
