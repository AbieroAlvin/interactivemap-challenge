import { useState, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Define a custom marker icon
const customIcon = new Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);

  const addMarker = (e) => {
    const newMarker = {
      id: markers.length + 1,
      position: e.latlng,
    };
    setMarkers([...markers, newMarker]);
  };

  const removeMarker = (id) => {
    const filteredMarkers = markers.filter((marker) => marker.id !== id);
    setMarkers(filteredMarkers);
  };

  return (
    <MapContainer
      ref={mapRef}
      center={[51.505, -0.09]}
      zoom={13}
      className="h-[500px] w-full md:max-w-[600px]"
      onClick={addMarker}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={customIcon}>
          <Popup>
            Marker {marker.id} <br />
            <button onClick={() => removeMarker(marker.id)}>
              Remove Marker
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
