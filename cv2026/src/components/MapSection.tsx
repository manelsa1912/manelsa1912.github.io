import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

const RecenterMap = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 400);
  }, [map]);
  return null;
};

export const MapSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl group">
        <div className="h-[500px] grayscale group-hover:grayscale-0 transition-all duration-700">
          <MapContainer center={[41.17, -8.60]} zoom={12} style={{ height: '100%', width: '100%' }}>
            <RecenterMap />
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            <Marker position={[41.1579, -8.6291]}><Popup>Wisecrop HQ</Popup></Marker>
            <Marker position={[41.3414, -8.4716]}><Popup>Santo Tirso</Popup></Marker>
          </MapContainer>
        </div>
        <div className="absolute bottom-10 left-10 z-[1000] p-6 bg-background/80 backdrop-blur-md border border-divider rounded-2xl max-w-xs pointer-events-none shadow-2xl">
          <h4 className="font-bold flex items-center gap-2 text-primary">
            <Globe size={18}/> Porto & Santo Tirso
          </h4>
          <p className="text-xs text-default-500 mt-2 italic leading-relaxed">{t('map_info')}</p>
        </div>
      </div>
    </section>
  );
};