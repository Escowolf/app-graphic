import React from "react";
import { TileLayer, Popup, Marker, MapContainer} from "react-leaflet";
import './Leaflet.css';
import'leaflet/dist/leaflet.css'

const position = [-3.7407515413204466, -38.49789735930933];

function Leaflet() {

  return (
    <>
      <MapContainer center={position} zoom={13} className={"map_area"} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            :)
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Leaflet;
