import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../index.css';
import L from 'leaflet';

const MapExplorer = () => {
  const navigate = useNavigate();
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const centroSantiago = [-33.4489, -70.6693];

  const restaurantIcon = (rating, tipo) => L.divIcon({
    className: '', 
    html: `
      <div class="flex items-center bg-white rounded-full shadow-xl border border-slate-100 overflow-hidden hover:scale-110 transition-transform duration-200">
        <div class="bg-orange-500 px-2 py-1 text-white text-[9px] font-black uppercase tracking-tighter">${tipo}</div>
        <div class="px-2 py-1 flex items-center gap-0.5 bg-white">
          <span class="text-[11px] font-bold text-slate-800">${rating}</span>
          <span class="text-orange-500 text-[10px]">★</span>
        </div>
      </div>
    `,
    iconSize: [110, 28],
    iconAnchor: [55, 14]
  });

  const locales = [
    { 
      id: 1, nombre: "La Vera Pasta", pos: [-33.4489, -70.6693], rating: "4.8", tipo: "Pasta", precio: "$12.000",
      fotos: [
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400", "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400",
        "https://images.unsplash.com/photo-1551815615-1fd3d3116bc6?w=400", "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f9?w=400",
        "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400", "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
        "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400", "https://images.unsplash.com/photo-1556760544-74358076cf0c?w=400",
        "https://images.unsplash.com/photo-1516100882582-76c97c44757e?w=400", "https://images.unsplash.com/photo-1534080564607-317f6a7d9d81?w=400"
      ]
    },
    { 
      id: 2, nombre: "Sushi Star", pos: [-33.4520, -70.6650], rating: "4.5", tipo: "Sushi", precio: "$15.000",
      fotos: [
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400", "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400",
        "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400", "https://images.unsplash.com/photo-1562158074-061019047124?w=400",
        "https://images.unsplash.com/photo-1559158068-9ad6a70ec9ec?w=400", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400", "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400",
        "https://images.unsplash.com/photo-1564489028333-9e4506836270?w=400", "https://images.unsplash.com/photo-1593642702749-b7d2a5482bb3?w=400"
      ]
    },
    { 
      id: 3, nombre: "El Parrillón", pos: [-33.4450, -70.6720], rating: "4.9", tipo: "Carne", precio: "$18.500",
      fotos: [
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=400", "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
        "https://images.unsplash.com/photo-1529692236671-f1f6e9481b2b?w=400", "https://images.unsplash.com/photo-1558039049-487352824362?w=400",
        "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400", "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=400",
        "https://images.unsplash.com/photo-1532591008422-77e48680c2f8?w=400", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400", "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"
      ]
    },
    { 
      id: 4, nombre: "Burger Palace", pos: [-33.4420, -70.6600], rating: "4.2", tipo: "Burger", precio: "$9.900",
      fotos: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400", "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400",
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400", "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400",
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400", "https://images.unsplash.com/photo-1547584385-8cd81745779c?w=400",
        "https://images.unsplash.com/photo-1550317144-651216b8017c?w=400", "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"
      ]
    },
    { 
      id: 5, nombre: "Taco Real", pos: [-33.4505, -70.6750], rating: "4.6", tipo: "Mexicana", precio: "$11.000",
      fotos: [
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400", "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400", "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400",
        "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
        "https://images.unsplash.com/photo-1582169542939-2c7e14581177?w=400", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400"
      ]
    },
    { 
      id: 6, nombre: "Mar y Tierra", pos: [-33.4550, -70.6680], rating: "4.7", tipo: "Mariscos", precio: "$22.000",
      fotos: [
        "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=400", "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400",
        "https://images.unsplash.com/photo-1535400255456-9842f9243c25?w=400", "https://images.unsplash.com/photo-1534080564607-317f6a7d9d81?w=400",
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400", "https://images.unsplash.com/photo-1502301103665-0b95cc738def?w=400"
      ]
    },
    { 
      id: 7, nombre: "Pizza Nostra", pos: [-33.4400, -70.6655], rating: "4.4", tipo: "Pizza", precio: "$13.500",
      fotos: [
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400", "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?w=400",
        "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400", "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400",
        "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400", "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400",
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400", "https://images.unsplash.com/photo-1571066811402-9d8d778844b9?w=400"
      ]
    },
    { 
      id: 8, nombre: "Green Garden", pos: [-33.4470, -70.6550], rating: "4.8", tipo: "Vegan", precio: "$10.500",
      fotos: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400", "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400", "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400",
        "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400", "https://images.unsplash.com/photo-1506084868730-3a5b12f45a3d?w=400",
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400", "https://images.unsplash.com/photo-1532591008422-77e48680c2f8?w=400"
      ]
    },
    { 
      id: 9, nombre: "Café de la Esquina", pos: [-33.4580, -70.6620], rating: "4.3", tipo: "Café", precio: "$6.000",
      fotos: [
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
        "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400", "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400",
        "https://images.unsplash.com/photo-1559925393-8be0ec41b504?w=400", "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400",
        "https://images.unsplash.com/photo-1521017432531-fbd92d74426b?w=400", "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400", "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400"
      ]
    },
    { 
      id: 10, nombre: "Ramen House", pos: [-33.4350, -70.6700], rating: "4.7", tipo: "Ramen", precio: "$14.000",
      fotos: [
        "https://images.unsplash.com/photo-1557872245-741f4c666e5c?w=400", "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
        "https://images.unsplash.com/photo-1552611052-33e04de081de?w=400", "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400",
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400", "https://images.unsplash.com/photo-1552611052-33e04de081de?w=400",
        "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400", "https://images.unsplash.com/photo-1547928576-a4a33237bec3?w=400",
        "https://images.unsplash.com/photo-1511910849309-0dffb8785146?w=400", "https://images.unsplash.com/photo-1552611052-d1d74e50d3c7?w=400"
      ]
    }
  ];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedLocal.fotos.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? selectedLocal.fotos.length - 1 : prev - 1));
  };

  return (
    <div className="h-screen w-full relative font-sans overflow-hidden">
      
      {/* Buscador Flotante */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[1000] w-full max-w-md px-4">
        <div className="bg-white shadow-2xl rounded-full flex items-center p-2 border border-slate-100 backdrop-blur-md">
          <input 
            type="text" 
            placeholder="¿Qué quieres comer, Joan?" 
            className="flex-1 bg-transparent border-none px-6 py-2 text-sm focus:ring-0 outline-none"
          />
          <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="h-full w-full">
        <MapContainer center={centroSantiago} zoom={14} style={{ height: '100%', width: '100%' }} zoomControl={false}>
          <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" attribution='&copy; Google' />
          
          {locales.map(local => (
            <Marker 
              key={local.id} 
              position={local.pos} 
              icon={restaurantIcon(local.rating, local.tipo)}
              eventHandlers={{ click: () => { setSelectedLocal(local); setCurrentImageIndex(0); } }}
            />
          ))}
        </MapContainer>
      </div>

      {/* TARJETA CON CARRUSEL Y BOTÓN X */}
      {selectedLocal && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-[1001] w-[90%] max-w-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          
          {/* Botón X de cierre */}
          <button 
            onClick={() => setSelectedLocal(null)}
            className="absolute top-3 right-3 z-[1002] bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-slate-100 hover:bg-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Carrusel Táctil */}
          <div className="h-48 w-full bg-slate-200 relative group">
            <img 
              src={selectedLocal.fotos[currentImageIndex]} 
              className="w-full h-full object-cover transition-all duration-500" 
              alt="Local" 
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400"; }}
            />
            
            {/* Flechas visibles siempre en móvil y escritorio */}
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md transition-all active:scale-90 z-[1003]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md transition-all active:scale-90 z-[1003]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              {currentImageIndex + 1} / {selectedLocal.fotos.length}
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 px-4 w-full justify-center overflow-hidden">
              {selectedLocal.fotos.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all flex-1 max-w-[15px] ${i === currentImageIndex ? 'bg-white' : 'bg-white/40'}`}></div>
              ))}
            </div>
          </div>

          <div className="p-4 cursor-pointer" onClick={() => navigate(`/establecimiento/${selectedLocal.id}`)}>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-slate-900 text-lg leading-tight">{selectedLocal.nombre}</h3>
              <div className="flex items-center gap-1 font-bold text-sm bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                <span className="text-orange-500">★</span> {selectedLocal.rating}
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-1">{selectedLocal.tipo} · Santiago</p>
            <div className="mt-4 flex justify-between items-center border-t border-slate-50 pt-3">
              <p className="font-bold text-slate-900 text-sm">Desde {selectedLocal.precio}</p>
              <span className="text-orange-600 text-xs font-black uppercase tracking-wider">Ver Menú</span>
            </div>
          </div>
        </div>
      )}

      {/* BOTÓN VOLVER AL INICIO */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000]">
         <button 
           onClick={() => navigate('/')} 
           className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform text-sm"
         >
           Volver al inicio
         </button>
      </div>
    </div>
  );
};

export default MapExplorer;