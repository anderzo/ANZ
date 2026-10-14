import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/p';
import WebProjects from './pages/WebProjects';
import InfraProjects from './pages/InfraProjects';
import Contact from './pages/Contact';
import Footer from './components/Footer'

export default function App() {
  const [showCvModal, setShowCvModal] = useState(false);

  return (
    <div className="bg-light text-dark min-vh-100 d-flex flex-column">
      <Navbar /> 

      <Routes>
        {/* Ruta de Inicio resumida en una sola línea */}
        <Route 
          path="/" 
          element={<Home showCvModal={showCvModal} setShowCvModal={setShowCvModal} />} 
        />

        {/* Rutas de Proyectos */}
        <Route path="/proyectos" element={<Projects />}>
          <Route index element={<p className="text-muted">Selecciona una categoría en los botones de arriba para ver los detalles.</p>} />
          <Route path="web" element={<WebProjects />} />
          <Route path="infraestructura" element={<InfraProjects />} />
        </Route>

        {/* Ruta de Contacto */}
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}