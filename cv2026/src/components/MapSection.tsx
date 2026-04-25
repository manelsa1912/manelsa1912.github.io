import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Globe, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Componente para centrar o mapa automaticamente em todos os marcadores
const AutoFitBounds = ({ positions }: { positions: [number, number][] }) => {
  const map = useMap();

  useEffect(() => {
    if (positions.length > 0) {
      const bounds = L.latLngBounds(positions);
      map.fitBounds(bounds, { 
        padding: [50, 50],
        maxZoom: 12 
      });
    }
  }, [map, positions]);

  return null;
};

const MapController = () => {
  const map = useMap();
  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 500);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
};

const createCustomIcon = (url: string, colorClass: string) => L.divIcon({
  html: `<div class="relative flex items-center justify-center w-12 h-12 bg-white border-2 ${colorClass} rounded-full shadow-2xl overflow-hidden group transition-transform hover:scale-110 duration-300">
           <img src="${url}" class="w-full h-full object-cover" style="display: block;" />
         </div>`,
  className: '',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -45],
});

export const MapSection = () => {
  const { t } = useTranslation();

  const locations = useMemo(() => ({
    wisecrop: { pos: [41.1579, -8.6291] as [number, number], title: "Wisecrop", icon: createCustomIcon('https://media.licdn.com/dms/image/v2/C4D0BAQG56fJ7Xf6-6w/company-logo_200_200/company-logo_200_200/0/1630571936443?e=2147483647&v=beta&t=H-W6F-w6qfL5h8z0l7k8f9g0h1i2j3k4l5m6n7o8p9q', 'border-primary') },
    ccg: { pos: [41.4532, -8.2891] as [number, number], title: "CCG", icon: createCustomIcon('https://ismirri21.mirri.org/wp-content/uploads/2020/05/CCG.png', 'border-primary') },
    isep: { pos: [41.1785, -8.6048] as [number, number], title: "ISEP", icon: createCustomIcon('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2LhmIX3sqljgL8YpC67--9WizZTWGls2qA&s', 'border-secondary') },
    feup: { pos: [41.1780, -8.5980] as [number, number], title: "FEUP", icon: createCustomIcon('https://sigarra.up.pt/feup/WEB_GESSI_DOCS.download_file?p_name=F1329397728/minerva_old.jpg', 'border-secondary') },
    home: { pos: [41.3414, -8.4716] as [number, number], title: "Santo Tirso", icon: createCustomIcon('https://api.iconify.design/lucide:home.svg?color=%23888888', 'border-default-400') },
  }), []);

  const allPositions = useMemo(() => Object.values(locations).map(l => l.pos), [locations]);

  return (
    <section className="relative py-20 snap-start">
      {/* Título mantém-se alinhado ao contentor (1200px) */}
      <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
        <MapPin className="text-primary" size={40} /> {t('map_title')}
      </h2>
      <div className="relative w-[90vw] left-1/2 -translate-x-1/2 overflow-hidden shadow-2xl h-[60vh] md:h-[70vh] z-0 rounded-xl">
        
        <div className="h-full w-full grayscale hover:grayscale-0 transition-all duration-1000">
          <MapContainer 
            center={[41.25, -8.55]}
            zoom={10} 
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false} 
          >
            <MapController />
            <AutoFitBounds positions={allPositions} />
            
            <TileLayer 
              attribution='&copy; CARTO'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" 
            />

            {Object.entries(locations).map(([key, loc]) => (
              <Marker key={key} position={loc.pos} icon={loc.icon}>
                <Popup minWidth={220} className="custom-popup">
                  <div className="p-2 flex flex-col gap-2 font-sans">
                    <h5 className={`font-bold text-base m-0 ${key === 'isep' || key === 'feup' ? 'text-secondary' : 'text-primary'}`}>
                      {loc.title}
                    </h5>
                    <p className="text-[12px] text-default-600 leading-snug">
                       {t(`map_${key}_desc`)}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}

          </MapContainer>
        </div>

        <div className="absolute bottom-10 left-[max(2rem,calc((100vw-1200px)/2+2rem))] z-[1001] p-6 bg-background/80 backdrop-blur-md border border-divider rounded-2xl max-w-xs pointer-events-none shadow-2xl hidden md:block">
          <h4 className="font-bold flex items-center gap-2 text-primary uppercase tracking-tighter">
            <Globe size={18} className="animate-pulse" /> 
            Porto & Santo Tirso
          </h4>
          <p className="text-xs text-default-600 mt-2 italic leading-relaxed">
            {t('map_info')}
          </p>
        </div>
      </div>
      
      <style>{`
        .leaflet-container { background-color: #111 !important; }
        .leaflet-popup-content-wrapper {
          background-color: hsl(var(--heroui-background) / 0.9) !important;
          backdrop-filter: blur(8px);
          border-radius: 16px !important;
          color: hsl(var(--heroui-foreground)) !important;
          border: 1px solid hsl(var(--heroui-divider));
        }
        .leaflet-popup-tip { background-color: hsl(var(--heroui-background) / 0.9) !important; }
        .leaflet-div-icon { background: transparent !important; border: none !important; }
      `}</style>
    </section>
  );
};