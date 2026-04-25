import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Globe, MapPin, ExternalLink, Code2, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const AutoFitBounds = ({ positions }: { positions: [number, number][] }) => {
  const map = useMap();
  useEffect(() => {
    if (positions.length > 0) {
      const bounds = L.latLngBounds(positions);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
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
    wisecrop: { 
      pos: [41.1579, -8.6291] as [number, number], 
      title: "Wisecrop", 
      icon: createCustomIcon('https://play-lh.googleusercontent.com/OobEapDiSscr2fP6jbex8MYB74GmTWK4WofNAencMK32XW9Y9Fl_nFyXHQ88ng-moufK-AqEUBvFYz9AktpNsQ', 'border-primary'),
      content: (
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">{t('wisecrop_period')}</p>
            <p className="text-[12px] leading-snug text-default-700 italic">{t('map_wisecrop_role')}</p>
            <ul className="mt-2 ml-4 list-disc text-[11px] text-default-600 flex flex-col gap-1">
              <li>{t('map_wisecrop_task1')}</li>
              <li>{t('map_wisecrop_task2')}</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-1">
            {['React', 'Django', 'TypeScript', 'Docker'].map(tech => (
              <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] rounded-full font-bold">{tech}</span>
            ))}
          </div>
          <a href="https://wisecrop.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 bg-default text-white text-[11px] font-bold rounded-lg no-underline hover:opacity-90 transition-opacity text-white">
            {t('map_official_site')} <ExternalLink size={12} />
          </a>
        </div>
      )
    },
    ccg: { 
      pos: [41.4532, -8.2891] as [number, number], 
      title: "CCG", 
      icon: createCustomIcon('https://ismirri21.mirri.org/wp-content/uploads/2020/05/CCG.png', 'border-primary'),
      content: (
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">{t('ccg_label')}</p>
            <p className="text-[12px] leading-snug text-default-700">{t('map_ccg_desc')}</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {['React', 'JWT', 'Encryption'].map(tech => (
              <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] rounded-full font-bold">{tech}</span>
            ))}
          </div>
        </div>
      )
    },
    isep: { 
      pos: [41.1785, -8.6048] as [number, number], 
      title: "ISEP", 
      icon: createCustomIcon('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2LhmIX3sqljgL8YpC67--9WizZTWGls2qA&s', 'border-secondary'),
      content: (
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">{t('edu_master_title')}</p>
            <p className="text-[12px] leading-snug text-default-700">{t('map_isep_desc')}</p>
          </div>
          <div className="bg-default-100 p-2 rounded-lg border border-divider">
            <p className="text-[9px] font-black text-default-500 mb-1 flex items-center gap-1 uppercase"><Code2 size={10}/> {t('map_rd_projects')}</p>
            <div className="flex flex-col gap-1 text-[10px]">
              <span className="font-bold text-secondary">DESOFS:</span> API DDD Segura
              <span className="font-bold text-secondary">QSOFT:</span> Lab de Performance 
            </div>
          </div>
        </div>
      )
    },
    feup: { 
      pos: [41.1780, -8.5980] as [number, number], 
      title: "FEUP", 
      icon: createCustomIcon('https://sigarra.up.pt/feup/WEB_GESSI_DOCS.download_file?p_name=F1329397728/minerva_old.jpg', 'border-secondary'),
      content: (
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">{t('edu_bachelor_title')}</p>
            <p className="text-[12px] leading-snug text-default-700">{t('map_feup_desc')}</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {['C++', 'Sistemas Operativos', 'Java'].map(tech => (
              <span key={tech} className="px-2 py-0.5 bg-secondary/10 text-secondary text-[9px] rounded-full font-bold">{tech}</span>
            ))}
          </div>
        </div>
      )
    },
    home: { 
      pos: [41.3414, -8.4716] as [number, number], 
      title: "Santo Tirso", 
      icon: createCustomIcon('https://api.iconify.design/lucide:home.svg?color=%23888888', 'border-default-400'),
      content: (
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[10px] font-bold text-default-500 uppercase tracking-wider mb-1">Freelance & Soft Skills</p>
            <p className="text-[12px] leading-snug text-default-700">{t('map_magic_desc')}</p>
          </div>
          <div className="bg-primary/5 p-2 rounded-lg border-l-2 border-primary italic text-[10px] text-default-600">
            "{t('map_magic_quote')}"
          </div>
        </div>
      )
    },
  }), [t]);

  const allPositions = useMemo(() => Object.values(locations).map(l => l.pos), [locations]);

  return (
    <section className="relative py-20 snap-start">
      <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
        <MapPin className="text-primary" size={40} /> {t('map_title')}
      </h2>

      <div className="relative w-[90vw] left-1/2 -translate-x-1/2 overflow-hidden shadow-2xl h-[60vh] md:h-[70vh] z-0 rounded-xl group">
        <div className="h-full w-full grayscale hover:grayscale-0 transition-all duration-1000">
          <MapContainer 
            center={[41.25, -8.55]}
            zoom={10} 
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false} 
            dragging={!L.Browser.mobile}
            touchZoom={true}
            doubleClickZoom={false}
          >
            <MapController />
            <AutoFitBounds positions={allPositions} />
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

            {Object.entries(locations).map(([key, loc]) => (
              <Marker key={key} position={loc.pos} icon={loc.icon}>
                <Popup minWidth={280} className="custom-popup">
                  <div className="p-1 font-sans">
                    <div className="flex items-center gap-2 mb-3 border-b border-divider pb-2">
                      {key === 'isep' || key === 'feup' ? <GraduationCap size={16} className="text-secondary"/> : <Code2 size={16} className="text-primary"/>}
                      <h5 className="font-bold text-base m-0 text-foreground">{loc.title}</h5>
                    </div>
                    {loc.content}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="absolute inset-0 pointer-events-none z-[500] flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity md:hidden">
            <div className="bg-black/70 text-white px-5 py-2 rounded-full text-[10px] font-bold backdrop-blur-md border border-white/20 uppercase tracking-widest text-center">
                {t('more_comming_soon') === "Brevemente..." ? "Usa dois dedos para navegar" : "Use two fingers to navigate"}
            </div>
        </div>

        <div className="absolute bottom-10 left-10 z-[1001] p-6 bg-background/80 backdrop-blur-md border border-divider rounded-2xl max-w-xs pointer-events-none shadow-2xl hidden md:block">
          <h4 className="font-bold flex items-center gap-2 text-primary uppercase tracking-tighter">
            <Globe size={18} className="animate-pulse" /> Porto & Santo Tirso 
          </h4>
          <p className="text-xs text-default-600 mt-2 italic leading-relaxed">
            {t('map_info')}
          </p>
        </div>
      </div>
      
      <style>{`
        .leaflet-container { 
          background-color: #111 !important; 
          touch-action: pan-y !important;
        }
        .leaflet-popup-content-wrapper {
          background-color: hsl(var(--heroui-background) / 0.95) !important;
          backdrop-filter: blur(12px);
          border-radius: 20px !important;
          border: 1px solid transparent;
          padding: 8px !important;
        }
        .leaflet-popup-tip { background-color: hsl(var(--heroui-background) / 0.95) !important; }
        .leaflet-div-icon { background: transparent !important; border: none !important; }
      `}</style>
    </section>
  );
};