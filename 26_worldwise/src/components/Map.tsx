import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import type { LatLngExpression } from "leaflet";

function MapClickHandler() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });
  return null;
}

interface ChangeCenterProps {
  position: LatLngExpression;
}

function ChangeCenter({ position }: ChangeCenterProps) {
  const map = useMap();
  map.setView(position, 6);
  return null;
}

const Map: React.FC = () => {
  const [mapPosition, setMapPosition] = useState<LatLngExpression>([
    40.4168, -3.7038,
  ]);

  const { cities } = useCities();
  const [lat, lng] = useUrlPosition();

  const {
    position: geolocationPosition,
    isLoading: isLoadingPosition,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if (lat && lng) {
      setMapPosition([lat, lng]);
    }
  }, [lat, lng]);

  useEffect(() => {
    if (geolocationPosition) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }
  }, [geolocationPosition]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Map Container with Enhanced Styling */}
      <div className="relative w-full h-full overflow-hidden">
        <MapContainer
          center={mapPosition}
          zoom={6}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {cities.map((city) => (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup>
                <div className="p-4 bg-white rounded-xl shadow-2xl border-0 min-w-[140px] text-center backdrop-blur-sm">
                  <div className="text-3xl mb-2 drop-shadow-sm">{city.emoji || "📍"}</div>
                  <div className="font-semibold text-slate-800 text-lg leading-tight">
                    {city.cityName}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">
                    {city.country}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
          <ChangeCenter position={mapPosition} />
          <MapClickHandler />
        </MapContainer>
      </div>

      {/* Enhanced Geolocation Button */}
      {!geolocationPosition && (
        <div className="absolute left-1/2 bottom-8 z-[1000] -translate-x-1/2">
          <button
            onClick={getPosition}
            disabled={isLoadingPosition}
            className="
              group relative flex items-center gap-3 px-8 py-4 
              bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 
              text-white font-semibold rounded-2xl shadow-2xl
              hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600
              focus:outline-none focus:ring-4 focus:ring-emerald-300/50
              transform hover:scale-105 hover:-translate-y-1
              transition-all duration-300 ease-out
              disabled:opacity-60 disabled:cursor-not-allowed 
              disabled:hover:scale-100 disabled:hover:translate-y-0
              border border-white/20 backdrop-blur-sm
            "
            aria-label="Use your location"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            
            {/* Icon with loading animation */}
            <div className="relative">
              {isLoadingPosition ? (
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </div>
            
            {/* Button text */}
            <span className="relative text-sm font-medium tracking-wide">
              {isLoadingPosition ? "Finding you..." : "Use My Location"}
            </span>
            
            {/* Animated dots for loading state */}
            {isLoadingPosition && (
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            )}
          </button>
        </div>
      )}

    </div>
  );
};

export default Map;
