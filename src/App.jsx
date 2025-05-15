import React from 'react';

// 🐝 Elementos globales
import AbejaSeguidora from './components/AbejaSeguidora/AbejaSeguidora';

// 🧭 Navegación principal
import Navbar from './components/Navbar/Navbar';

// 🎯 Secciones principales
import Hero from './components/Hero';
import Servicios from './components/Servicios/Servicios';
import Elegirnos from './components/Elegirnos/Elegirnos';
import Proyectos from './components/Proyectos/Proyectos';
import Testimonios from './components/Testimonios/Testimonios';

// 🦶 Pie de página profesional
import Footer from './components/Footer/Footer'; // ✅ Asegúrate de que exista y tenga su CSS

function App() {
  return (
    <>
      {/* 🐝 Animación flotante que sigue el mouse */}
      <AbejaSeguidora />

      {/* 🟡 Barra de navegación sticky */}
      <Navbar />

      <main>
        {/* 💙 Sección hero de bienvenida */}
        <Hero />

        {/* 💡 Servicios ofrecidos */}
        <Servicios />

        {/* ⚡ Motivos para elegir Lukbyte */}
        <Elegirnos />

        {/* 🚀 Proyectos desarrollados */}
        <Proyectos />

        {/* 💬 Testimonios de clientes */}
        <Testimonios />
      </main>

      {/* 🦶 Footer elegante con mapa, suscripción y créditos */}
      <Footer />
    </>
  );
}

export default App;
