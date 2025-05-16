import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToSection from './utils/ScrollToSection'; // ✅ nuevo

// 🐝 Elementos globales
import AbejaSeguidora from './components/AbejaSeguidora/AbejaSeguidora';

// 🧭 Navegación principal
import Navbar from './components/Navbar/Navbar';
import DesarrolloWeb from './pages/servicios/DesarrolloWeb';
import DisenoUIUX from './pages/servicios/DisenoUIUX';
import AplicacionesPWA from './pages/servicios/AplicacionesPWA';
import AutomatizacionAPIs from './pages/servicios/AutomatizacionAPIs';


// 🎯 Secciones principales
import Hero from './components/Hero';
import Servicios from './components/Servicios/Servicios';
import Elegirnos from './components/Elegirnos/Elegirnos';
import Proyectos from './components/Proyectos/Proyectos';
import Testimonios from './components/Testimonios/Testimonios';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';

// 🦶 Pie de página profesional
import Footer from './components/Footer/Footer';

function Home() {
  return (
    <>
      <ScrollToSection /> {/* ✅ Scroll basado en la URL */}

      <section id="inicio">
        <Hero />
      </section>

      <section id="servicios">
        <Servicios />
      </section>

      <Elegirnos />

      <section id="proyectos">
        <Proyectos />
      </section>

      <Testimonios />

      <section id="contacto">
        <div style={{ height: '1px' }}></div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <AbejaSeguidora />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/servicios/diseno-ui-ux" element={<DisenoUIUX />} />
          <Route path="/servicios/pwa" element={<AplicacionesPWA />} />
          <Route path="/servicios/automatizacion-apis" element={<AutomatizacionAPIs />} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
