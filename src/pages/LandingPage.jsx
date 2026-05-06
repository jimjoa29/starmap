import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="text-xl font-black tracking-tighter text-slate-900">StarMap</span>
        </div>
        <div className="flex gap-4 text-sm font-semibold">
          <Link to="/explorar" className="bg-slate-900 text-white py-2.5 px-6 rounded-full hover:bg-black transition-all">
            Explorar Mapa
          </Link>
        </div>
      </nav>

      <header className="px-8 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Descubre sabores <span className="text-orange-500">en tu mapa.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-md">
            StarMap es el "Airbnb de la comida" en Santiago. Encuentra los mejores locales de comida cerca de ti.
          </p>
          <Link to="/explorar" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg inline-block">
            Empezar a buscar
          </Link>
        </div>
        <div className="bg-slate-100 rounded-[2rem] aspect-square overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800" 
            alt="Comida en Santiago" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>
    </div>
  );
};

export default LandingPage;