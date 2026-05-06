import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para el icono de ubicación en el mini-mapa
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, iconSize: [25, 41], iconAnchor: [12, 41] });
L.Marker.prototype.options.icon = DefaultIcon;

const BusinessDetail = () => {
  const { id } = useParams();
  const position = [-33.4489, -70.6693]; // Ubicación exacta del inmueble en Santiago

  const servicios = [
    { nombre: 'WiFi de alta velocidad', icono: '📶' },
    { nombre: 'Estacionamiento gratuito', icono: '🚗' },
    { nombre: 'Cocina equipada', icono: '🍳' },
    { nombre: 'Aire acondicionado', icono: '❄️' },
    { nombre: 'Zona de trabajo', icono: '💻' },
    { nombre: 'Lavadora', icono: '🧺' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans scroll-smooth">
      {/* 1. Header de Título */}
      <header id="fotos" className="max-w-6xl mx-auto pt-8 px-6">
        <h1 className="text-3xl font-bold text-slate-900 leading-tight">
          La Mejor ubicación de Santiago. Muy Tranquilo 10
        </h1>
        <div className="flex justify-between items-center mt-2 text-sm">
          <p className="underline font-semibold cursor-pointer">Santiago, Región Metropolitana, Chile</p>
          <div className="flex gap-4 font-semibold">
            <button className="flex items-center gap-2 underline hover:bg-slate-50 px-2 py-1 rounded transition-colors">Compartir</button>
            <button className="flex items-center gap-2 underline hover:bg-slate-50 px-2 py-1 rounded transition-colors">Guardar</button>
          </div>
        </div>
      </header>

      {/* 2. Galería de Imágenes - Estilo Pro */}
      <section className="max-w-6xl mx-auto mt-6 px-6 grid grid-cols-4 grid-rows-2 gap-2 h-[450px] overflow-hidden rounded-2xl relative">
        <div className="col-span-2 row-span-2 overflow-hidden bg-slate-200">
           <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="Principal" />
        </div>
        <div className="overflow-hidden bg-slate-200"><img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="2" /></div>
        <div className="overflow-hidden bg-slate-200"><img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="3" /></div>
        <div className="overflow-hidden bg-slate-200"><img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="4" /></div>
        <div className="overflow-hidden bg-slate-200 relative group">
          <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" alt="5" />
          <button className="absolute bottom-4 right-4 bg-white border border-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-slate-50 transition-colors">
            Mostrar todas las fotos
          </button>
        </div>
      </section>

      {/* 3. BARRA DE NAVEGACIÓN STICKY - (image_afc31c.png) */}
      <nav className="sticky top-0 bg-white border-b border-slate-200 z-50 shadow-sm overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6 flex gap-8 py-6 text-sm font-bold text-slate-600">
          <a href="#fotos" className="text-slate-900 border-b-2 border-slate-900 pb-6 transition-all">Fotos</a>
          <a href="#servicios" className="hover:text-slate-900 transition-colors pb-6 border-b-2 border-transparent hover:border-slate-300">Servicios</a>
          <a href="#reseñas" className="hover:text-slate-900 transition-colors pb-6 border-b-2 border-transparent hover:border-slate-300">Reseñas</a>
          <a href="#ubicacion" className="hover:text-slate-900 transition-colors pb-6 border-b-2 border-transparent hover:border-slate-300">Ubicación</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contenido Principal */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-start border-b pb-8">
            <div>
              <h2 className="text-2xl font-bold">Anfitrión: Joan Alejandro</h2>
              <p className="text-slate-600">Superanfitrión · 5 años de experiencia</p>
            </div>
            <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-black shadow-lg">J</div>
          </div>

          <div className="py-8 border-b">
            <p className="text-slate-700 leading-relaxed text-lg">
              Vive una experiencia única en este departamento diseñado para el confort. Ubicado en una zona privilegiada de Santiago, cerca de metros y restaurantes exclusivos.
            </p>
          </div>

          <section id="servicios" className="py-12 border-b">
            <h3 className="text-2xl font-bold mb-6">Lo que este lugar ofrece</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
              {servicios.map((s, index) => (
                <div key={index} className="flex items-center gap-4 text-slate-700">
                  <span className="text-2xl">{s.icono}</span>
                  <span className="text-lg">{s.nombre}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="reseñas" className="py-12 border-b">
            <div className="flex items-center gap-2 text-2xl font-bold mb-8">
              <span>★ 4.81</span>
              <span className="text-slate-400">·</span>
              <span>146 reseñas</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-4 border border-slate-100 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <p className="font-bold">Ricardo</p>
                    <p className="text-xs text-slate-400">Mayo de 2026</p>
                  </div>
                </div>
                <p className="text-slate-600">"El lugar superó mis expectativas. Muy seguro y la atención de Joan fue excelente."</p>
              </div>
            </div>
          </section>

          {/* 6. SECCIÓN DE UBICACIÓN (La pieza que faltaba, Joan) */}
          <section id="ubicacion" className="py-12">
            <h3 className="text-2xl font-bold mb-6">Dónde te quedarás</h3>
            <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner z-0">
              <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" attribution="&copy; Google Maps" />
                <Marker position={position} />
              </MapContainer>
            </div>
            <p className="mt-4 font-bold text-slate-900">Santiago, Región Metropolitana</p>
            <p className="text-slate-600 text-sm mt-1">Te enviaremos la dirección exacta una vez confirmada la reserva por seguridad.</p>
          </section>
        </div>
        
        {/* Caja de Reserva Sticky */}
        <aside className="relative">
          <div className="sticky top-28 p-6 border rounded-2xl shadow-2xl bg-white space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold">$85.000 <span className="text-sm font-normal text-slate-500">/ noche</span></p>
              <div className="flex items-center gap-1 text-sm font-bold">
                <span>★ 4.81</span>
                <span className="text-slate-300 font-normal underline">(146)</span>
              </div>
            </div>
            <div className="border border-slate-400 rounded-xl overflow-hidden">
               <div className="grid grid-cols-2 border-b border-slate-400">
                  <div className="p-3 border-r border-slate-400 cursor-pointer hover:bg-slate-50 transition-colors">
                    <p className="text-[10px] font-black uppercase">Llegada</p>
                    <p className="text-sm">05/05/2026</p>
                  </div>
                  <div className="p-3 cursor-pointer hover:bg-slate-50 transition-colors">
                    <p className="text-[10px] font-black uppercase">Salida</p>
                    <p className="text-sm">10/05/2026</p>
                  </div>
               </div>
               <div className="p-3 cursor-pointer hover:bg-slate-50 transition-colors">
                 <p className="text-[10px] font-black uppercase">Huéspedes</p>
                 <p className="text-sm flex justify-between">1 huésped <span>▼</span></p>
               </div>
            </div>
            <button className="w-full bg-gradient-to-r from-[#E31C5F] to-[#D70466] text-white font-bold py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
              Reservar
            </button>
            <p className="text-center text-xs text-slate-500">No se te cobrará nada todavía</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default BusinessDetail;