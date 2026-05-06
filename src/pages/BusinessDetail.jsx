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
  const position = [-33.4489, -70.6693]; // Ubicación en Santiago

  // 1. Amenidades adaptadas a Restaurantes, Joan
  const amenidades = [
    { nombre: 'Terraza / Outdoor', icono: '⛱️' },
    { nombre: 'Cava de Vinos', icono: '🍷' },
    { nombre: 'Opciones Veganas', icono: '🌿' },
    { nombre: 'Música en vivo', icono: '🎸' },
    { nombre: 'Pet Friendly', icono: '🐶' },
    { nombre: 'Estacionamiento Clientes', icono: '🚗' },
  ];

  // 2. Platos destacados para generar curiosidad, Joan
  const menuDestacado = [
    { nombre: "Pasta al Pesto Genovese", precio: "$14.500", desc: "Albahaca fresca, piñones y queso pecorino." },
    { nombre: "Lasaña della Nonna", precio: "$12.900", desc: "Receta tradicional con 12 horas de cocción." },
  ];

  return (
    <div className="bg-white min-h-screen font-sans scroll-smooth">
      {/* Header de Título */}
      <header id="fotos" className="max-w-6xl mx-auto pt-8 px-6">
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

      {/* Galería de Imágenes (image_ae61a4.jpg style) */}
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
            Mostrar fotos del menú
          </button>
        </div>
      </section>

      {/* Barra de Navegación Sticky */}
      <nav className="sticky top-0 bg-white border-b border-slate-200 z-50 shadow-sm overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6 flex gap-8 py-6 text-sm font-bold text-slate-600">
          <a href="#fotos" className="text-slate-900 border-b-2 border-slate-900 pb-6">Fotos</a>
          <a href="#menu" className="hover:text-slate-900 transition-colors pb-6 border-b-2 border-transparent hover:border-slate-300">Menú</a>
          <a href="#reseñas" className="hover:text-slate-900 transition-colors pb-6 border-b-2 border-transparent hover:border-slate-300">Reseñas</a>
          <a href="#ubicacion" className="hover:text-slate-900 transition-colors pb-6 border-b-2 border-transparent hover:border-slate-300">Ubicación</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Info del Chef/Anfitrión */}
          <div className="flex justify-between items-start border-b pb-8">
            <div>
              <h2 className="text-2xl font-bold">Chef Ejecutivo: Joan Alejandro</h2>
              <p className="text-slate-600">Especialista en cocina mediterránea · Santiago Centro</p>
            </div>
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white text-xl font-black shadow-lg">J</div>
          </div>

          {/* Sección de Menú Destacado, Joan */}
          <section id="menu" className="py-12 border-b">
            <h3 className="text-2xl font-bold mb-6">Platos recomendados</h3>
            <div className="grid grid-cols-1 gap-6">
              {menuDestacado.map((plato, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                  <div>
                    <p className="font-bold text-lg">{plato.nombre}</p>
                    <p className="text-sm text-slate-500">{plato.desc}</p>
                  </div>
                  <p className="font-black text-slate-900">{plato.precio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Amenidades de Restaurante */}
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

          {/* Ubicación */}
          <section id="ubicacion" className="py-12">
            <h3 className="text-2xl font-bold mb-6">Nuestra Ubicación</h3>
            <div className="h-[350px] w-full rounded-3xl overflow-hidden border border-slate-200 z-0">
              <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" attribution="&copy; Google Maps" />
                <Marker position={position} />
              </MapContainer>
            </div>
          </section>
        </div>
        
        {/* CAJA DE RESERVA DE MESA - SISTEMA DE DINERO, JOAN */}
        <aside className="relative">
          <div className="sticky top-28 p-6 border rounded-[2rem] shadow-2xl bg-white space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Reserva tu mesa</p>
              <span className="text-sm bg-orange-100 text-orange-600 font-bold px-2 py-1 rounded-lg">Pocas mesas</span>
            </div>
            
            <div className="border border-slate-300 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 border-b border-slate-300">
                  <div className="p-3 border-r border-slate-300 hover:bg-slate-50 cursor-pointer">
                    <p className="text-[10px] font-black uppercase">Fecha</p>
                    <p className="text-sm font-bold">Hoy</p>
                  </div>
                  <div className="p-3 hover:bg-slate-50 cursor-pointer">
                    <p className="text-[10px] font-black uppercase">Hora</p>
                    <p className="text-sm font-bold">20:30 hrs</p>
                  </div>
                </div>
                <div className="p-3 hover:bg-slate-50 cursor-pointer">
                  <p className="text-[10px] font-black uppercase">Comensales</p>
                  <p className="text-sm font-bold flex justify-between tracking-tight">2 Personas <span>▼</span></p>
                </div>
            </div>

            <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-orange-600 transition-all active:scale-95">
              Confirmar Reserva
            </button>
            <p className="text-center text-[11px] text-slate-400">Reserva instantánea sin costo de gestión</p>
          </div>
        </aside>
      </main>

      {/* Botón Flotante para volver al mapa rápidamente */}
      <button 
        onClick={() => navigate('/explorar')}
        className="fixed bottom-6 right-6 bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-2"
      >
        <span className="font-bold text-sm">Explorar más en Santiago</span>
      </button>
    </div>
  );
};

export default BusinessDetail;