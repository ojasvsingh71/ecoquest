import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const localData = [
  { id: 1, name: 'Community Recycling Center', latitude: 28.6676, longitude: 77.4538, description: 'Drop off your recyclables and reduce waste!', category: 'Recycling' },
  { id: 2, name: 'Green Energy Hub', latitude: 28.6824, longitude: 77.3910, description: 'Learn about solar energy and how to switch to green power.', category: 'Energy' },
  { id: 3, name: 'Urban Garden Initiative', latitude: 28.7041, longitude: 77.3691, description: 'Join local gardening efforts to grow food sustainably.', category: 'Gardening' },
  { id: 4, name: 'Electric Car Charging Station', latitude: 28.6012, longitude: 77.3945, description: 'Charge your electric vehicle here and help reduce emissions.', category: 'Transportation' },
  { id: 5, name: 'Clean Water Project', latitude: 28.6155, longitude: 77.4043, description: 'Access to clean and safe drinking water for all.', category: 'Water Conservation' },
  { id: 6, name: 'Green Construction Materials Store', latitude: 28.6730, longitude: 77.3967, description: 'Explore eco-friendly building materials for sustainable construction.', category: 'Construction' },
  { id: 7, name: 'Tree Plantation Drive', latitude: 28.7029, longitude: 77.3778, description: 'Participate in local tree planting initiatives to combat climate change.', category: 'Reforestation' },
  { id: 8, name: 'Sustainable Transport Hub', latitude: 28.6292, longitude: 77.4440, description: 'Use electric bikes and carpooling services for sustainable transportation.', category: 'Transportation' },
  { id: 9, name: 'Eco-friendly Packaging Store', latitude: 28.6917, longitude: 77.4124, description: 'Find alternatives to plastic packaging and support sustainable products.', category: 'Waste Reduction' },
  { id: 10, name: 'Organic Farmers Market', latitude: 28.6769, longitude: 77.4061, description: 'Support local farmers and buy fresh organic produce.', category: 'Sustainable Food' },
];

// Define a custom marker icon for each category
const getIconForCategory = (category) => {
  const icons = {
    Recycling: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
    Energy: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
    Gardening: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
    Transportation: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
    'Water Conservation': 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
    Construction: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
    Reforestation: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
    'Waste Reduction': 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
    'Sustainable Food': 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
  };
  
  return new Icon({
    iconUrl: icons[category] || 'https://upload.wikimedia.org/wikipedia/commons/0/06/Map_marker_icon.svg',
    iconSize: [25, 25],
  });
};

const LocalMap = () => {
  const [zoom, setZoom] = useState(12); // Adjusted zoom for Ghaziabad

  useEffect(() => {
    // Automatically zoom based on user's geolocation (optional)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setZoom(15); // Zoom in if user's geolocation is found
      }, () => {
        setZoom(12); // Fallback zoom level if geolocation fails
      });
    }
  }, []);

  return (
    <div className="local-map-container">
      <h2>Local Eco Initiatives in Ghaziabad</h2>
      <p>Discover nearby eco-friendly initiatives such as recycling centers, green energy hubs, and more! Click on the markers to learn more.</p>
      <MapContainer
        center={[28.6139, 77.3910]} // Center on Ghaziabad
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '500px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {localData.map((location) => (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            icon={getIconForCategory(location.category)}
          >
            <Popup>
              <h3>{location.name}</h3>
              <p>{location.description}</p>
              <p><strong>Category:</strong> {location.category}</p>
            </Popup>
          </Marker>
        ))}

        {/* Optional: Add a circle around a point to highlight a specific area */}
        <Circle
          center={[28.7041, 77.3910]} // Example location for highlighting in Ghaziabad
          radius={5000}
          color="green"
          fillColor="green"
          fillOpacity={0.1}
        />
      </MapContainer>
    </div>
  );
};

export default LocalMap;
