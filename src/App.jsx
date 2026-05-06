import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MapExplorer from './pages/MapExplorer';
import RegisterBusiness from './pages/RegisterBusiness';
import './index.css'; // <--- ESTA LÍNEA CARGA LOS ESTILOS PARA TODO EL PROYECTO, JOAN

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explorar" element={<MapExplorer />} />
        <Route path="/registrar-negocio" element={<RegisterBusiness />} />
      </Routes>
    </Router>
  );
}

export default App;