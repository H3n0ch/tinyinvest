"use client";
import { useState, useCallback } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

// SVG pin icons (data URI)
const greenPin =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 9.75 14 22 14 22S28 23.75 28 14C28 6.27 21.73 0 14 0z" fill="#15803d"/>
      <circle cx="14" cy="14" r="6" fill="white"/>
    </svg>`
  );

const amberPin =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 9.75 14 22 14 22S28 23.75 28 14C28 6.27 21.73 0 14 0z" fill="#d97706"/>
      <circle cx="14" cy="14" r="6" fill="white"/>
    </svg>`
  );

const indigoPin =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 28 36">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 9.75 14 22 14 22S28 23.75 28 14C28 6.27 21.73 0 14 0z" fill="#6366f1"/>
      <circle cx="14" cy="14" r="6" fill="white"/>
    </svg>`
  );

const redPin =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 9.75 14 22 14 22S28 23.75 28 14C28 6.27 21.73 0 14 0z" fill="#dc2626"/>
      <circle cx="14" cy="14" r="6" fill="white"/>
    </svg>`
  );

function getPinIcon(status: string) {
  if (status === "available") return greenPin;
  if (status === "reserved")  return amberPin;
  if (status === "planning")  return indigoPin;
  return redPin; // sold / other
}

const MAP_STYLE: React.CSSProperties = { width: "100%", height: "460px" };

const MAP_OPTIONS: google.maps.MapOptions = {
  mapTypeId: "roadmap",
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  zoomControl: true,
  styles: [
    { featureType: "poi",        elementType: "labels", stylers: [{ visibility: "off" }] },
    { featureType: "transit",    elementType: "labels", stylers: [{ visibility: "off" }] },
    { featureType: "water",      elementType: "geometry", stylers: [{ color: "#c9e8f5" }] },
    { featureType: "landscape",  elementType: "geometry", stylers: [{ color: "#f0f4f8" }] },
    { featureType: "road",       elementType: "geometry", stylers: [{ color: "#ffffff" }] },
    { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#dee4ea" }] },
    { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#b0bec5" }] },
  ],
};

export interface MapListing {
  id: number;
  title: string;
  location: string;
  status: string;
  status_label: string;
  irr: string;
  preis: string;
  asset_id: string;
  total: number;
  reserved: number;
  lat: number | null;
  lng: number | null;
}

interface Props {
  listings: MapListing[];
}

export default function ProjekteGoogleMap({ listings }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [selected, setSelected] = useState<MapListing | null>(null);

  const onUnmount = useCallback(() => {}, []);

  // Only show listings that have been successfully geocoded
  const pins = listings.filter(
    (l): l is MapListing & { lat: number; lng: number } =>
      l.lat !== null && l.lng !== null
  );

  // Center: average of all geocoded pins, or Europe fallback
  const center =
    pins.length > 0
      ? {
          lat: pins.reduce((s, l) => s + l.lat, 0) / pins.length,
          lng: pins.reduce((s, l) => s + l.lng, 0) / pins.length,
        }
      : { lat: 48.0, lng: 15.0 };

  const zoom = pins.length <= 1 ? 6 : pins.length <= 4 ? 4 : 3;

  if (!isLoaded) {
    return (
      <div className="bg-gray-100 rounded-2xl flex items-center justify-center" style={MAP_STYLE}>
        <p className="text-gray-400 text-sm">Karte wird geladen …</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <GoogleMap
        mapContainerStyle={MAP_STYLE}
        center={center}
        zoom={zoom}
        options={MAP_OPTIONS}
        onUnmount={onUnmount}
        onClick={() => setSelected(null)}
      >
        {pins.map((listing) => (
          <Marker
            key={listing.id}
            position={{ lat: listing.lat, lng: listing.lng }}
            icon={getPinIcon(listing.status)}
            onClick={() => setSelected(listing)}
          />
        ))}

        {selected && selected.lat !== null && selected.lng !== null && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div className="font-sans text-gray-800 min-w-[160px]">
              <p className="text-[11px] text-gray-400 mb-0.5">#{selected.asset_id}</p>
              <p className="font-bold text-[13px] leading-tight mb-1">{selected.title}</p>
              <p className="text-[11px] text-gray-500 mb-2">{selected.location}</p>
              <div className="flex gap-3 text-[11px]">
                <span className="text-green-700 font-semibold">IRR: {selected.irr}</span>
                <span className="text-gray-600">{selected.preis}/Einheit</span>
              </div>
              <p className="text-[11px] text-gray-700 font-semibold mt-1">
                {Math.max(0, selected.total - selected.reserved)} Einheit(en) verfügbar
              </p>
              <p className={`mt-1 text-[10px] font-semibold ${
                selected.status === "available" ? "text-green-600" :
                selected.status === "reserved"  ? "text-amber-600" :
                selected.status === "planning"  ? "text-indigo-500" :
                "text-red-500"
              }`}>
                ● {selected.status_label}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
