import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      {/* 1. NAVEGACIÓN PRO */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <span className="text-xl font-black tracking-tighter text-slate-900">StarMap</span>
        </div>
        <div className="flex gap-4">
          
          <Link to="/explorar" className="bg-slate-900 text-white py-4 px-10 rounded-full text-sm font-bold hover:bg-black transition-all shadow-md">
            Explorar el Mapa
          </Link>
        </div>
      </nav>

      {/* 2. HERO SECTION CON EL NUEVO CTA NARANJA, JOAN */}
      <header className="px-8 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Descubre sabores <span className="text-orange-500 font-extrabold italic">en tu mapa.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto lg:mx-0">
            StarMap es el "Airbnb de la comida" en Santiago. Encuentra los mejores locales o impulsa tu propio negocio hoy mismo.
          </p>
          
          {/* LLAMADO A LA ACCIÓN REFORZADO - JOAN */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        
            <button 
              onClick={() => navigate('/registro')} 
              className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-2xl hover:bg-orange-600 hover:scale-105 transition-all flex flex-col items-center leading-tight border-b-4 border-orange-700 active:border-b-0"
            >
              <span>¡ÚNETE!</span>
              <span className="text-[10px] font-bold opacity-90 uppercase tracking-widest mt-1">
                Aparece en el mapa y consigué más clientes
              </span>
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-orange-100 rounded-[3rem] -z-10 blur-2xl opacity-50 group-hover:opacity-80 transition-all"></div>
          <div className="bg-slate-100 rounded-[2.5rem] aspect-square overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800" 
              alt="Comida en Santiago" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* 3. SECCIÓN DE BENEFICIOS (POR QUÉ STARMAP) */}
      <section className="bg-slate-50 py-24 px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black mb-4">¿Cómo transformamos tu negocio?</h2>
          <p className="text-slate-500 font-medium">Llevamos el flujo de clientes de Santiago directamente a tu negocio.</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Visibilidad Pro", desc: "Aparece en nuestro mapa interactivo con valoraciones en tiempo real.", ico: "📍" },
            { title: "Portal de Lujo", desc: "Tus clientes verán un Business Detail premium con grill de 10 fotos.", ico: "✨" },
            { title: "Reservas 24/7", desc: "Un sistema automatizado para que nunca pierdas un comensal.", ico: "📱" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
              <div className="text-4xl mb-6">{item.ico}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PASO A PASO PARA NEGOCIOS */}
      <section className="py-8 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="space-y-12">
                {[
                  { step: "01", t: "Regístrate en el Programa", d: "Crea tu cuenta y define la identidad de tu local." },
                  { step: "02", t: "Sube tus Mejores 10 Fotos", d: "Nuestro sistema las organizará en un carrusel dinámico." },
                  { step: "03", t: "Recibe Reservas", d: "Tus clientes te encontrarán en el mapa de Santiago." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-black text-orange-200">{s.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{s.t}</h4>
                      <p className="text-slate-500">{s.d}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
              Tú cocinas, <span className="text-orange-500">nosotros</span> llenamos las mesas.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              No necesitas ser un experto en tecnología. Diseñamos StarMap para que sea tan fácil como usar Instagram, pero con el poder de venta de un portal inmobiliario de lujo.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CIERRE POTENTE (FOOTER CTA) */}
      <section className="px-8 py-20 bg-slate-900 text-white text-center rounded-t-[3rem] mt-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
            ¿Listo para ver tu restaurante en el mapa?
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            Únete hoy a los locales que ya están ganando dinero con nuestro sistema de automatización en Santiago.
          </p>
          <button 
             onClick={() => navigate('/registro')}
             className="bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-12 rounded-2xl text-xl shadow-2xl transition-all active:scale-95"
          >
            COMENZAR AHORA
          </button>
        </div>
        <div className="mt-20 pt-8 border-t border-slate-800 text-slate-500 text-sm">
          © 2026 StarMap Santiago · Creado por Joan Alejandro
        </div>
      </section>
    </div>
  );
};

export default LandingPage;