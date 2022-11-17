import { MapContainer, TileLayer, Marker, Popup } from 'https://cdn.esm.sh/react-leaflet'
import ReactDOM from 'react-dom';

function Leaflet() {
  const position = [51.505, -0.09]

  ReactDOM.render(
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>,
  )
}

export default Leaflet;