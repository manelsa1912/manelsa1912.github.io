import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Globe } from "lucide-react";
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
        padding: [50, 50], // Espaço de segurança para os ícones não tocarem nos bordos
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

// Função para criar ícones com logos maiores e bem formatados
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

  // Memórias das posições para o AutoFit e Marcadores
  const locations = useMemo(() => ({
    wisecrop: { pos: [41.1579, -8.6291] as [number, number], icon: createCustomIcon('https://play-lh.googleusercontent.com/OobEapDiSscr2fP6jbex8MYB74GmTWK4WofNAencMK32XW9Y9Fl_nFyXHQ88ng-moufK-AqEUBvFYz9AktpNsQ', 'border-primary') },
    ccg: { pos: [41.4532, -8.2891] as [number, number], icon: createCustomIcon('https://ismirri21.mirri.org/wp-content/uploads/2020/05/CCG.png', 'border-primary') },
    isep: { pos: [41.1785, -8.6048] as [number, number], icon: createCustomIcon('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2LhmIX3sqljgL8YpC67--9WizZTWGls2qA&s', 'border-secondary') },
    feup: { pos: [41.1780, -8.5980] as [number, number], icon: createCustomIcon('https://sigarra.up.pt/feup/WEB_GESSI_DOCS.download_file?p_name=F1329397728/minerva_old.jpg', 'border-secondary') },
    home: { pos: [41.3414, -8.4716] as [number, number], icon: createCustomIcon('https://api.iconify.design/lucide:home.svg?color=%23888888', 'border-default-400') },
  }), []);

  const allPositions = useMemo(() => Object.values(locations).map(l => l.pos), [locations]);

  return (
    <section className="py-20 relative">
      <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl group h-[550px]">
        
        <div className="h-full w-full grayscale group-hover:grayscale-0 transition-all duration-700 z-0">
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
            
            <TileLayer 
              attribution='© <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" 
            />

            {/* Marcadores Uniformizados */}
            <Marker position={locations.wisecrop.pos} icon={locations.wisecrop.icon}>
              <Popup minWidth={220} className="custom-popup">
                <div className="p-2 flex flex-col gap-2 font-sans">
                  <h5 className="font-bold text-primary text-base m-0">Wisecrop</h5>
                  <p className="text-[12px] text-default-600 leading-snug">Product Designer & Developer</p>
                  <a href="https://wisecrop.com" target="_blank" rel="noreferrer" className="mt-1 text-[11px] bg-primary text-white py-2 rounded-lg text-center font-bold no-underline hover:opacity-90 transition-opacity">
                    Website Oficial →
                  </a>
                </div>
              </Popup>
            </Marker>

            <Marker position={locations.ccg.pos} icon={locations.ccg.icon}>
              <Popup minWidth={220} className="custom-popup">
                <div className="p-2 flex flex-col gap-2 font-sans">
                  <h5 className="font-bold text-primary text-base m-0">CCG</h5>
                  <p className="text-[12px] text-default-600 leading-snug">Centro de Computação Gráfica</p>
                  <a href="https://ccg.pt/" target="_blank" rel="noreferrer" className="mt-1 text-[11px] bg-primary text-white py-2 rounded-lg text-center font-bold no-underline hover:opacity-90 transition-opacity">
                    Projetos & R&D →
                  </a>
                </div>
              </Popup>
            </Marker>

            <Marker position={locations.isep.pos} icon={locations.isep.icon}>
              <Popup minWidth={220} className="custom-popup">
                <div className="p-2 flex flex-col gap-2 font-sans">
                  <h5 className="font-bold text-secondary text-base m-0">ISEP</h5>
                  <p className="text-[12px] text-default-600 leading-snug">Engenharia Informática</p>
                  <a href="https://www.isep.ipp.pt/" target="_blank" rel="noreferrer" className="mt-1 text-[11px] bg-secondary text-white py-2 rounded-lg text-center font-bold no-underline hover:opacity-90 transition-opacity">
                    Página do Curso →
                  </a>
                </div>
              </Popup>
            </Marker>

            <Marker position={locations.feup.pos} icon={locations.feup.icon}>
              <Popup minWidth={220} className="custom-popup">
                <div className="p-2 flex flex-col gap-2 font-sans">
                  <h5 className="font-bold text-secondary text-base m-0">FEUP</h5>
                  <p className="text-[12px] text-default-600 leading-snug">Faculdade de Engenharia (U. Porto)</p>
                  <a href="https://sigarra.up.pt/feup/" target="_blank" rel="noreferrer" className="mt-1 text-[11px] bg-secondary text-white py-2 rounded-lg text-center font-bold no-underline hover:opacity-90 transition-opacity">
                    Website Institucional →
                  </a>
                </div>
              </Popup>
            </Marker>

            <Marker position={locations.home.pos} icon={locations.home.icon}>
              <Popup minWidth={220} className="custom-popup">
                <div className="p-2 flex flex-col gap-2 font-sans">
                  <h5 className="font-bold text-default-700 text-base m-0">Santo Tirso</h5>
                  <p className="text-[12px] text-default-500 italic leading-snug">Home Office / Base de Trabalho</p>
                  <div className="mt-1 text-[11px] bg-default-100 text-default-600 py-2 rounded-lg text-center font-bold border border-default-200 cursor-default">
                    Localização Principal
                  </div>
                </div>
              </Popup>
            </Marker>

          </MapContainer>
        </div>

        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-[1001] p-6 bg-background/80 backdrop-blur-md border border-divider rounded-2xl max-w-xs pointer-events-none shadow-2xl">
          <h4 className="font-bold flex items-center gap-2 text-primary uppercase tracking-tighter">
            <Globe size={18} className="animate-pulse" /> 
            Porto & Santo Tirso
          </h4>
          <p className="text-xs text-default-600 mt-2 italic leading-relaxed">
            {t('map_info') || 'Disponível para reuniões presenciais no Grande Porto ou colaboração remota.'}
          </p>
        </div>
      </div>
      
      <style>{`
        .leaflet-container {
          touch-action: pan-y !important;
          a{
            color:unset;
          }
        }
        .leaflet-v-layer {
          cursor: default !important;
        }
        .leaflet-popup-content-wrapper {
          background-color: hsl(var(--heroui-background) / 0.9) !important;
          backdrop-filter: blur(8px);
          border-radius: 16px !important;
          color: hsl(var(--heroui-foreground)) !important;
        }
        .leaflet-popup-tip {
          background-color: hsl(var(--heroui-background) / 0.9) !important;
        }
        .leaflet-control-zoom{
        color:black;
        }
        .leaflet-div-icon {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </section>
  );
};