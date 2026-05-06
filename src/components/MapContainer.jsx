import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLocales } from "../hooks/useLocales";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const MapContainer = ({ onSelectLocal }) => {
  const mapContainerRef = useRef(null);
  const { locales, loading } = useLocales();

  // Mapeo de iconos para identificar el tipo de comida de un vistazo, Joan
  const getIcon = (tipo) => {
    const tipos = {
      'Chino': '🥡',
      'Japonés': '🍣',
      'Coreano': '🥢',
      'Chileno': '🇨🇱',
      'Venezolano': '🇻🇪',
      'Dominicano': '🇩🇴',
      'Italiano': '🍕'
    };
    return tipos[tipo] || '🍴';
  };

  useEffect(() => {
    if (loading || !mapContainerRef.current || !mapboxgl.accessToken) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12', 
      center: [-70.6341, -33.4372], // Santiago, Chile
      zoom: 13 
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    locales.forEach((local) => {
      const el = document.createElement('div');
      el.className = 'cursor-pointer group relative';
      
      // Diseño de círculo con valoración en una sola línea e icono superior, Joan
      el.innerHTML = `
        <div class="flex flex-col items-center">
          <span class="text-[10px] z-10 mb-[-2px] drop-shadow-sm">${getIcon(local.tipo_comida)}</span>
          
          <div class="w-11 h-11 bg-white rounded-full shadow-lg border-2 border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <span class="text-[11px] font-bold text-slate-800">${local.puntuacion} ★</span>
          </div>
        </div>
      `;

      el.addEventListener('click', () => {
        onSelectLocal(local);
      });

      new mapboxgl.Marker(el)
        .setLngLat([local.longitud, local.latitud])
        .addTo(map);
    });

    return () => map.remove();
  }, [loading, locales, onSelectLocal]);

  return <div ref={mapContainerRef} className="absolute inset-0 w-full h-full bg-slate-800" />;
};

export default MapContainer;