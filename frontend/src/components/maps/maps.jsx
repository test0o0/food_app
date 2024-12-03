import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './maps.css'; // Import CSS for styling
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default icon issues in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Map() {
  // Coordinates for McDonald's at Tooley St, London
  const position = [51.5045, -0.0809];

  return (
    <div className="map-wrapper">
      {/* Information Card */}
      <div className="info-card">
        <h2>McDonald's</h2>
        <h3>South London</h3>
        <p>
          Tooley St, London Bridge,<br />
          London SE1 2TF,<br />
          United Kingdom
        </p>
        <p><strong>Phone number</strong><br />+934443-43</p>
        <p><strong>Website</strong><br /><a href="http://mcdonalds.uk/" target="_blank" rel="noreferrer">http://mcdonalds.uk/</a></p>
      </div>

      {/* Map Container */}
      <MapContainer className="map-container" center={position} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            McDonald's<br />
            Tooley St, London Bridge,<br />
            London SE1 2TF, United Kingdom
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
