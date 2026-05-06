import React from 'react';
import { Link } from 'react-router-dom';

const RegisterBusiness = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl max-w-lg w-full border border-slate-100">
        <h1 className="text-3xl font-black text-slate-900 mb-4 text-center">Haz que tu negocio brille ⭐</h1>
        <p className="text-slate-600 text-center mb-8">Estamos preparando el formulario para que subas tus fotos y ubicación en Santiago.</p>
        <Link to="/" className="block w-full bg-slate-900 text-white text-center font-bold py-4 rounded-2xl">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default RegisterBusiness;