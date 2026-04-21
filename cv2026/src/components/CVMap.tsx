import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Importante para os ícones aparecerem no Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// EXPORT NOMEADO
export function CVMap({ points }: { points: any[] }) {
  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl mb-10">
      <MapContainer center={[41.1579, -8.6291]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {points.map((point, idx) => (
          <Marker key={idx} position={point.pos}>
            <Popup>
              <div className="p-1">
                <h4 className="font-bold text-primary">{point.title}</h4>
                <p className="text-xs">{point.desc}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}