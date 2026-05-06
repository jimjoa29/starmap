import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para el icono de ubicación
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, iconSize: [25, 41], iconAnchor: [12, 41] });
L.Marker.prototype.options.icon = DefaultIcon;

const BusinessDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const position = [-33.4489, -70.6693];

  const amenidades = [
    { nombre: 'Terraza / Outdoor', icono: '⛱️' },
    { nombre: 'Cava de Vinos', icono: '🍷' },
    { nombre: 'Opciones Veganas', icono: '🌿' },
    { nombre: 'Música en vivo', icono: '🎸' },
    { nombre: 'Pet Friendly', icono: '🐶' },
    { nombre: 'Estacionamiento Clientes', icono: '🚗' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans scroll-smooth relative">
      
      {/* 1. BOTÓN VOLVER (HEADER) - JOAN */}
      <nav className="max-w-6xl mx-auto pt-6 px-6">
        <button 
          onClick={() => navigate('/explorar')}
          className="flex items-center gap-2 text-slate-900 hover:bg-slate-100 px-3 py-2 rounded-full transition-all font-bold text-sm border border-slate-200 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al mapa
        </button>
      </nav>

      {/* Header de Título */}
      <header id="fotos" className="max-w-6xl mx-auto pt-4 px-6">
        <div className="flex items-center gap-2 mb-2">
           <span className="bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">Comida Italiana</span>
           <span className="text-sm font-bold text-slate-500">★ 4.9</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 leading-tight">
          La Vera Pasta - Tradición en Santiago
        </h1>
        <div className="flex justify-between items-center mt-2 text-sm">
          <p className="underline font-semibold cursor-pointer">Santiago Centro, RM, Chile</p>
          <div className="flex gap-4 font-semibold">
            <button className="underline">Compartir</button>
            <button className="underline">Guardar</button>
          </div>
        </div>
      </header>

      {/* Galería de Imágenes */}
      <section className="max-w-6xl mx-auto mt-6 px-6 grid grid-cols-4 grid-rows-2 gap-2 h-[450px] overflow-hidden rounded-2xl relative">
        <div className="col-span-2 row-span-2 overflow-hidden bg-slate-200">
           <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" alt="Plato Principal" />
        </div>
        <div className="overflow-hidden bg-slate-200"><img src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400" className="w-full h-full object-cover hover:scale-105 transition-all" alt="Ambiente" /></div>
        <div className="overflow-hidden bg-slate-200"><img src="https://images.unsplash.com/photo-1551815615-1fd3d3116bc6?w=400" className="w-full h-full object-cover hover:scale-105 transition-all" alt="Vinos" /></div>
        <div className="overflow-hidden bg-slate-200"><img src="https://images.unsplash.com/photo-1563379091339-03b21bc4a4f9?w=400" className="w-full h-full object-cover hover:scale-105 transition-all" alt="Pasta" /></div>
        <div className="overflow-hidden bg-slate-200 relative group">
          <img src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400" className="w-full h-full object-cover hover:scale-105 transition-all" alt="Postre" />
          <button className="absolute bottom-4 right-4 bg-white border border-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-md">
            Mostrar fotos
          </button>
        </div>
      </section>

      {/* Barra de Navegación Sticky */}
      <nav className="sticky top-0 bg-white border-b border-slate-200 z-50 shadow-sm overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6 flex gap-8 py-6 text-sm font-bold text-slate-600">
          <a href="#fotos" className="text-slate-900 border-b-2 border-slate-900 pb-6">Fotos</a>
          <a href="#menu" className="hover:text-slate-900 transition-colors pb-6">Menú</a>
          <a href="#reseñas" className="hover:text-slate-900 transition-colors pb-6">Reseñas</a>
          <a href="#ubicacion" className="hover:text-slate-900 transition-colors pb-6">Ubicación</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-start border-b pb-8">
            <div>
              <h2 className="text-2xl font-bold">Chef: Joan Alejandro</h2>
              <p className="text-slate-600">Especialista en cocina mediterránea</p>
            </div>
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white text-xl font-black">J</div>
          </div>

          <section className="py-12 border-b">
            <h3 className="text-2xl font-bold mb-6">Lo que el restaurante ofrece</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
              {amenidades.map((s, index) => (
                <div key={index} className="flex items-center gap-4 text-slate-700">
                  <span className="text-2xl">{s.icono}</span>
                  <span className="text-lg">{s.nombre}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="ubicacion" className="py-12">
            <h3 className="text-2xl font-bold mb-6">Ubicación</h3>
            <div className="h-[350px] w-full rounded-3xl overflow-hidden border border-slate-200">
              <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" attribution="&copy; Google Maps" />
                <Marker position={position} />
              </MapContainer>
            </div>
          </section>
        </div>
        
        {/* Caja de Reserva */}
        <aside className="relative">
          <div className="sticky top-28 p-6 border rounded-[2rem] shadow-2xl bg-white space-y-4">
            <p className="text-xl font-bold">Reserva tu mesa</p>
            <div className="border border-slate-300 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 border-b border-slate-300">
                  <div className="p-3 border-r border-slate-300 hover:bg-slate-50 cursor-pointer">
                    <p className="text-[10px] font-black uppercase">Fecha</p>
                    <p className="text-sm font-bold">Hoy</p>
                  </div>
                  <div className="p-3 hover:bg-slate-50 cursor-pointer">
                    <p className="text-[10px] font-black uppercase">Hora</p>
                    <p className="text-sm font-bold">20:30</p>
                  </div>
                </div>
                <div className="p-3 hover:bg-slate-50 cursor-pointer">
                  <p className="text-[10px] font-black uppercase">Personas</p>
                  <p className="text-sm font-bold">2 Personas</p>
                </div>
            </div>
            <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-all">
              Confirmar Reserva
            </button>
          </div>
        </aside>
      </main>

      {/* 2. BOTÓN FLOTANTE (VOLVER AL HOME) - JOAN */}
      <button 
        onClick={() => navigate('/')}
        className="fixed bottom-6 left-6 bg-white text-slate-900 border border-slate-200 p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all z-50 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="font-bold text-sm hidden md:inline">Inicio</span>
      </button>
    </div>
  );
};

export default BusinessDetail;