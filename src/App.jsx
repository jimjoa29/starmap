import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MapExplorer from './pages/MapExplorer';
import RegisterBusiness from './pages/RegisterBusiness';
import BusinessDetail from './pages/BusinessDetail'; // <--- IMPORTAMOS LA NUEVA LANDING, JOAN
import './index.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explorar" element={<MapExplorer />} />
        <Route path="/registrar-negocio" element={<RegisterBusiness />} />
        
        {/* NUEVA RUTA: El :id permite que esta página sea dinámica para cualquier local, Joan */}
        <Route path="/establecimiento/:id" element={<BusinessDetail />} />
      </Routes>
    </Router>
  );
}

export default App;