import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapPin, Phone, Mail, Navigation, Maximize2 } from 'lucide-react';

export interface HubLocation {
  id: 'lagos' | 'nairobi' | 'accra' | 'joburg';
  name: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
  badge: string;
}

export const HUB_LOCATIONS: Record<string, HubLocation> = {
  lagos: {
    id: 'lagos',
    name: 'Lagos Corporate HQ',
    city: 'Lagos',
    country: 'Nigeria',
    address: 'Metro Transit Tower, Plot 14 Victoria Island Commercial Zone, Lagos, Nigeria',
    phone: '+234 800 638 7687',
    email: 'lagos@metrotransitlogistics.com',
    hours: 'Mon - Sun: 24/7 Operations',
    lat: 6.4281,
    lng: 3.4219,
    badge: 'Pan-African HQ'
  },
  nairobi: {
    id: 'nairobi',
    name: 'Nairobi Regional Hub',
    city: 'Nairobi',
    country: 'Kenya',
    address: 'Westlands Commercial Center, Waiyaki Way, Nairobi, Kenya',
    phone: '+254 700 889 001',
    email: 'nairobi@metrotransitlogistics.com',
    hours: 'Mon - Sun: 24/7 Operations',
    lat: -1.2675,
    lng: 36.8040,
    badge: 'East Africa Gateway'
  },
  accra: {
    id: 'accra',
    name: 'Accra Logistics Hub',
    city: 'Accra',
    country: 'Ghana',
    address: 'Airport Residential Area, Liberation Road, Accra, Ghana',
    phone: '+233 302 990 123',
    email: 'accra@metrotransitlogistics.com',
    hours: 'Mon - Sun: 24/7 Operations',
    lat: 5.6037,
    lng: -0.1870,
    badge: 'West Africa Hub'
  },
  joburg: {
    id: 'joburg',
    name: 'Johannesburg Gateway',
    city: 'Johannesburg',
    country: 'South Africa',
    address: 'Sandton City Office Tower, 5th Street, Johannesburg, South Africa',
    phone: '+27 11 880 4492',
    email: 'joburg@metrotransitlogistics.com',
    hours: 'Mon - Sun: 24/7 Operations',
    lat: -26.1076,
    lng: 28.0567,
    badge: 'Southern Africa Gateway'
  }
};

interface InteractiveMapProps {
  selectedHubKey: 'lagos' | 'nairobi' | 'accra' | 'joburg';
  onSelectHub: (key: 'lagos' | 'nairobi' | 'accra' | 'joburg') => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  selectedHubKey,
  onSelectHub
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map if not already done
    if (!mapInstanceRef.current) {
      const initialHub = HUB_LOCATIONS[selectedHubKey] || HUB_LOCATIONS.lagos;
      const map = L.map(mapContainerRef.current, {
        center: [initialHub.lat, initialHub.lng],
        zoom: 12,
        zoomControl: false,
        attributionControl: false
      });

      // Dark theme map tiles from CartoDB Dark Matter
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(map);

      // Add zoom control at bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      mapInstanceRef.current = map;

      // Add markers for all hubs
      Object.values(HUB_LOCATIONS).forEach((hub) => {
        const isSelected = hub.id === selectedHubKey;

        // Custom HTML Marker Icon
        const customIcon = L.divIcon({
          className: 'custom-map-marker',
          html: `
            <div class="relative group cursor-pointer flex items-center justify-center">
              <div class="absolute -inset-2 rounded-full bg-[#D61F26]/30 animate-ping opacity-75"></div>
              <div class="w-9 h-9 rounded-full bg-[#111111] border-2 ${
                isSelected ? 'border-[#D61F26] scale-110 shadow-[0_0_15px_#D61F26]' : 'border-zinc-600 hover:border-[#D61F26]'
              } flex items-center justify-center text-white transition-all shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${
                  isSelected ? '#D61F26' : '#ffffff'
                }" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#18181b] border border-zinc-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-lg pointer-events-none">
                ${hub.city}
              </div>
            </div>
          `,
          iconSize: [36, 36],
          iconAnchor: [18, 18]
        });

        const marker = L.marker([hub.lat, hub.lng], { icon: customIcon }).addTo(map);

        // Bind popup
        const popupContent = `
          <div class="p-1 space-y-2 text-zinc-100 min-w-[200px]">
            <div class="flex items-center justify-between border-b border-zinc-800 pb-1.5">
              <span class="text-[10px] uppercase font-bold text-[#D61F26]">${hub.badge}</span>
              <span class="text-[9px] text-zinc-400 font-mono">${hub.lat.toFixed(2)}°, ${hub.lng.toFixed(2)}°</span>
            </div>
            <h4 class="text-xs font-black text-white uppercase tracking-tight">${hub.name}</h4>
            <p class="text-[11px] text-zinc-300 leading-tight">${hub.address}</p>
            <div class="pt-1 flex flex-col gap-1 text-[10px] text-zinc-400">
              <div class="flex items-center gap-1">
                <span class="text-emerald-400 font-bold">●</span> ${hub.hours}
              </div>
              <div class="flex items-center gap-1 text-white font-mono font-bold">
                ☎ ${hub.phone}
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=${hub.lat},${hub.lng}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="mt-2 text-[10px] font-bold text-center block w-full py-1.5 bg-[#D61F26] text-white rounded-lg hover:bg-[#b8181e] transition-colors shadow-sm"
            >
              Get Directions ➔
            </a>
          </div>
        `;

        marker.bindPopup(popupContent);

        marker.on('click', () => {
          onSelectHub(hub.id);
        });

        markersRef.current[hub.id] = marker;
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Pan / Fly to selected hub when `selectedHubKey` changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const hub = HUB_LOCATIONS[selectedHubKey];
    if (hub) {
      map.flyTo([hub.lat, hub.lng], 13, {
        duration: 1.2
      });

      // Update marker icons styling
      Object.entries(markersRef.current).forEach(([id, m]) => {
        const marker = m as L.Marker;
        const isSelected = id === selectedHubKey;
        const h = HUB_LOCATIONS[id];
        if (h) {
          const newIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `
              <div class="relative group cursor-pointer flex items-center justify-center">
                ${isSelected ? '<div class="absolute -inset-2 rounded-full bg-[#D61F26]/30 animate-ping opacity-75"></div>' : ''}
                <div class="w-9 h-9 rounded-full bg-[#111111] border-2 ${
                  isSelected ? 'border-[#D61F26] scale-110 shadow-[0_0_15px_#D61F26]' : 'border-zinc-600 hover:border-[#D61F26]'
                } flex items-center justify-center text-white transition-all shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${
                    isSelected ? '#D61F26' : '#ffffff'
                  }" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#18181b] border ${
                  isSelected ? 'border-[#D61F26] text-[#D61F26]' : 'border-zinc-700 text-white'
                } text-[10px] font-bold px-2 py-0.5 rounded-md shadow-lg pointer-events-none">
                  ${h.city}
                </div>
              </div>
            `,
            iconSize: [36, 36],
            iconAnchor: [18, 18]
          });
          marker.setIcon(newIcon);

          if (isSelected) {
            marker.openPopup();
          }
        }
      });
    }
  }, [selectedHubKey]);

  const handleFitAllHubs = () => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const bounds = L.latLngBounds(
      Object.values(HUB_LOCATIONS).map((h) => [h.lat, h.lng])
    );
    map.fitBounds(bounds, { padding: [50, 50] });
  };

  return (
    <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
      {/* Map Element */}
      <div ref={mapContainerRef} className="w-full h-full z-0 min-h-[300px]" />

      {/* Top Map Overlay Controls */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
        <button
          onClick={handleFitAllHubs}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#18181b]/90 hover:bg-[#D61F26] border border-zinc-700 text-white text-[11px] font-bold rounded-lg backdrop-blur-md transition-all shadow-lg"
          title="Fit view to show all Pan-African hubs"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Show All Hubs</span>
        </button>
      </div>

      {/* Bottom Left Live Status Badge */}
      <div className="absolute bottom-3 left-3 z-10 bg-[#121212]/90 border border-zinc-800 px-3 py-1.5 rounded-lg backdrop-blur-md flex items-center gap-2 shadow-lg text-[10px]">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-zinc-300 font-medium">Interactive Dispatch Network Map</span>
      </div>
    </div>
  );
};
