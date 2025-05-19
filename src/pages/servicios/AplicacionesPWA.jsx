import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './AplicacionesPWA.css';

// Imágenes
import abeja from '../../assets/abejas/abeja1.png';
import mockupPWA from '../../assets/mockups/pwa-movil-desktop.png';
import pwa1 from '../../assets/proyectos/pwa1.png';
import pwa2 from '../../assets/proyectos/pwa2.png';
import pwa3 from '../../assets/proyectos/pwa3.png';

export default function AplicacionesPWA() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  const whatsappMessage = encodeURIComponent(
    `¡Hola! Estoy interesad@ en desarrollar una Aplicación Web Progresiva (PWA) para mi negocio.

Me gustaría agendar una asesoría gratuita para conocer cómo funciona y qué beneficios puede aportar a mi proyecto.`
  );

  const whatsappLink = `https://wa.me/573150399322?text=${whatsappMessage}`;

  return (
    <main className="pwa-container">
      {/* 🐝 Abejas decorativas animadas */}
      <motion.img
        src={abeja}
        alt="abeja"
        className="abeja-pwa top-left"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={abeja}
        alt="abeja"
        className="abeja-pwa mid-right"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.img
        src={abeja}
        alt="abeja"
        className="abeja-pwa bottom-left"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* 🔥 HERO */}
      <section className="hero-pwa">
        <div className="contenido-hero" data-aos="fade-right">
          <h1 className="titulo-impactante">⚡ Aplicaciones Web Progresivas (PWA)</h1>
          <p>
            Carga instantánea, experiencia nativa y acceso desde cualquier dispositivo. La
            tecnología que impulsa la nueva era del desarrollo web.
          </p>
          <div className="cta-hero">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primario"
            >
              Agendar asesoría
            </a>
            <a href="#ejemplos-pwa" className="btn-secundario">
              Ver ejemplos
            </a>
          </div>
        </div>
        <div className="mockup-hero" data-aos="fade-left">
          <img src={mockupPWA} alt="Mockup PWA" />
        </div>
      </section>

      {/* 🚀 BENEFICIOS */}
      <section className="beneficios-pwa">
        <h2 className="titulo-impactante">🚀 ¿Por qué elegir una PWA?</h2>
        <div className="grid-beneficios">
          {[
            '📱 Funciona como una app nativa',
            '⚡ Carga rápida incluso sin conexión',
            '📦 Instalable desde el navegador',
            '💰 Reduce costos de desarrollo móvil',
            '🌐 Accesible desde cualquier dispositivo',
            '📈 Mejora el rendimiento y engagement',
          ].map((beneficio, i) => (
            <div className="beneficio" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              {beneficio}
            </div>
          ))}
        </div>
      </section>

      {/* 🛠 PROCESO */}
      <section className="proceso-pwa">
        <h2 className="titulo-impactante">🔧 Nuestro proceso para desarrollar tu PWA</h2>
        <ul className="pasos-pwa">
          {[
            '🔍 Análisis de necesidades y funcionalidades clave',
            '🧱 Arquitectura responsive y optimizada',
            '⚙️ Implementación de Service Workers y App Shell',
            '📲 Diseño UX centrado en mobile-first',
            '✅ Pruebas offline, instalación y accesibilidad',
            '🚀 Lanzamiento y soporte continuo',
          ].map((paso, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 120}>
              {paso}
            </li>
          ))}
        </ul>
      </section>

      {/* ✨ GALERÍA */}
      <section id="ejemplos-pwa" className="galeria-ejemplos">
        <h2 className="titulo-impactante">✨ Ejemplos de PWAs desarrolladas</h2>
        <div className="grid-proyectos">
          {[pwa1, pwa2, pwa3].map((img, i) => (
            <div className="proyecto-img" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <img src={img} alt={`PWA ejemplo ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="asesoria" className="cta-final">
        <h2 className="titulo-impactante">🔥 Lleva tu producto web al siguiente nivel</h2>
        <p>
          Agendemos una asesoría gratuita y descubre cómo una PWA puede transformar tu experiencia
          digital.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primario">
          Quiero una PWA para mi negocio
        </a>
      </section>
    </main>
  );
}
