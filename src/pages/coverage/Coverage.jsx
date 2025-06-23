import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { VscRunCoverage } from 'react-icons/vsc';
import { FaMapMarkerAlt } from 'react-icons/fa';
import districtData from '../../data/districtBranches.json';

// Fix for default marker icon not showing
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Component to auto zoom to searched district
const MapFocus = ({ latitude, longitude }) => {
  const map = useMap();

  useEffect(() => {
    if (latitude && longitude) {
      map.flyTo([latitude, longitude], 10, {
        duration: 1.5,
      });
    }
  }, [latitude, longitude, map]);

  return null;
};

const Coverage = () => {
  const [search, setSearch] = useState('');

  const filteredData = districtData.filter((district) =>
    district.district.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        <VscRunCoverage className="inline-block text-4xl text-green-500 mr-2" />
        Our Parcel Delivery Coverage - 64 Districts of Bangladesh
      </h2>

      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="🔍 Search District..."
          className="p-3 border border-gray-300 rounded-lg w-full max-w-md shadow-sm text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <MapContainer
        center={[23.685, 90.3563]}
        zoom={7}
        scrollWheelZoom={true}
        style={{
          height: '450px',
          width: '100%',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Auto zoom on single search result */}
        {filteredData.length === 1 && (
          <MapFocus
            latitude={filteredData[0].latitude}
            longitude={filteredData[0].longitude}
          />
        )}

        {/* Markers for districts */}
        {filteredData.map((district, idx) => (
          <Marker
            key={idx}
            position={[district.latitude, district.longitude]}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={0.9} sticky>
              <span className="text-green-800 font-semibold">
                <FaMapMarkerAlt className="inline-block text-red-500 mr-1" />
                {district.district} - Covered
              </span>
            </Tooltip>
            <Popup>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-blue-700">
                  {district.city}, {district.region}
                </h3>
                <p>
                  <span className="font-semibold">Areas:</span>{' '}
                  {district.covered_area.join(', ')}
                </p>
                {/* <img
                  src={district.flowchart}
                  alt={`${district.district} flowchart`}
                  className="w-full h-40 object-contain rounded border border-gray-300"
                /> */}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Coverage;
