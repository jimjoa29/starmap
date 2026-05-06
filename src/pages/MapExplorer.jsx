import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../index.css';

// Fix técnico para los iconos (Evita que desaparezcan en Santiago)
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({ 
  iconUrl: icon, 
  shadowUrl: iconShadow, 
  iconSize: [25, 41], 
  iconAnchor: [12, 41] 
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapExplorer = () => {
  const position = [-33.4489, -70.6693]; // Centro de Santiago, Joan

  return (
    <div className="h-screen w-full relative font-sans">
      {/* Buscador Flotante Estilo Airbnb - Intacto, Joan */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[1000] w-full max-w-md px-4">
        <div className="bg-white shadow-2xl rounded-full flex items-center p-2 border border-slate-100 backdrop-blur-md">
          <input 
            type="text" 
            placeholder="¿Qué quieres comer, Joan?" 
            className="flex-1 bg-transparent border-none px-6 py-2 text-sm focus:ring-0 outline-none"
          />
          <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contenedor del Mapa con Estética Google Maps */}
      <div className="h-full w-full">
        <MapContainer 
          center={position} 
          zoom={15} 
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          {/* CAMBIO CLAVE: URL directa de los servidores de Google Maps */}
          <TileLayer
            url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            attribution='&copy; Google Maps'
          />
          
          <Marker position={position}>
            <Popup>
              <div className="p-2 text-center">
                <h3 className="font-bold text-slate-900 leading-tight">Star Local</h3>
                <p className="text-[10px] text-orange-500 font-black uppercase mt-1">Santiago, Chile</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Botón flotante para volver al inicio */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[1000]">
         <button 
           onClick={() => window.history.back()}
           className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform text-sm"
         >
           Volver al inicio
         </button>
      </div>
    </div>
  );
};

export default MapExplorer;