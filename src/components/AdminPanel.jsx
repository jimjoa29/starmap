import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';

const AdminPanel = ({ onLocalAdded, initialCoords }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    puntuacion: 5.0,
    tipo_comida: 'Chilena', // Nuevo campo para categorías
    foto_url: '',           // Campo para la imagen del local
    latitud: -33.4372,
    longitud: -70.6341,
    promocion_activa: false
  });

  useEffect(() => {
    if (initialCoords) {
      setFormData(prev => ({ ...prev, latitud: initialCoords.lat, longitud: initialCoords.lng }));
    }
  }, [initialCoords]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('locales').insert([formData]);
    if (error) {
      alert("Error en el registro, Joan.");
    } else {
      alert("¡Establecimiento registrado con éxito! 🚀");
      onLocalAdded();
    }
  };

  return (
    <div className="fixed right-4 top-4 w-85 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 overflow-hidden" 
         style={{ zIndex: 10000, backgroundColor: '#0f172a', fontFamily: 'sans-serif' }}>
      
      <div className="p-4 bg-orange-500 text-white text-center">
        <h3 className="text-lg font-bold uppercase tracking-wider">Registrar Establecimiento</h3>
        <p className="text-xs opacity-90">Aumenta tus ventas apareciendo en el mapa</p>
      </div>

      <form onSubmit={handleSubmit} className="p-5 space-y-3">
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase">Nombre de la Empresa</label>
          <input className="w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-sm text-white outline-none focus:border-orange-500"
                 style={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                 value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} required />
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase">Especialidad (Tipo de Comida)</label>
          <select className="w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-sm text-white outline-none"
                  style={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: 'white' }}
                  value={formData.tipo_comida} onChange={(e) => setFormData({...formData, tipo_comida: e.target.value})}>
            <option value="Chilena">🇨🇱 Chilena</option>
            <option value="Venezolana">🇻🇪 Venezolana</option>
            <option value="Dominicana">🇩🇴 Dominicana</option>
            <option value="Italiana">🇮🇹 Italiana</option>
            <option value="China">🇨🇳 China</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase">Link de Foto del Local</label>
          <input className="w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-sm text-white outline-none"
                 style={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                 placeholder="https://imagen-de-tu-comida.jpg"
                 value={formData.foto_url} onChange={(e) => setFormData({...formData, foto_url: e.target.value})} />
        </div>

        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95"
                style={{ backgroundColor: '#f97316', cursor: 'pointer', border: 'none' }}>
          PUBLICAR ESTABLECIMIENTO
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;