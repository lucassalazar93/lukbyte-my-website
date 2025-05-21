import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './BioLinks.css';

// Imágenes
import abeja from '../../assets/abejas/abeja1.png';
import mockupBio from '../../assets/mockups/bio-mockup.png';
import ejemplo1 from '../../assets/bio-links/ejemplo1.png';
import ejemplo2 from '../../assets/bio-links/ejemplo2.png';
import ejemplo3 from '../../assets/bio-links/ejemplo3.png';
import ejemplo4 from '../../assets/bio-links/ejemplo4.png';

export default function BioLinks() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  const whatsapp = '573150399322';
  const mensajeBio = encodeURIComponent(
    '¡Hola Lukbyte! Quiero un Bio Link visual, profesional y adaptado a mi marca. 💫'
  );

  return (
    <section className="bio-container">
      {/* 🐝 Abejas decorativas */}
      <motion.img
        src={abeja}
        alt="abeja"
        className="abeja-uiux top-left"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={abeja}
        alt="abeja"
        className="abeja-uiux bottom-right"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* 🎯 Hero */}
      <div className="bio-hero">
        <div className="bio-text">
          <h1 className="titulo-impactante" data-aos="fade-up">
            Tu identidad digital en un solo enlace.
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Creamos bio links impactantes, responsivos y adaptados a tu estilo para brillar en redes
            sociales.
          </p>
          <div className="btn-dual" data-aos="fade-up" data-aos-delay="400">
            <a
              href={`https://wa.me/${whatsapp}?text=${mensajeBio}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-principal"
            >
              ✨ Solicitar mi Bio Link
            </a>
            <a href="/servicios/ejemplos#bio-links" className="btn-secundario">
              🔍 Ver ejemplos
            </a>
          </div>
        </div>
        <div className="bio-mockup" data-aos="zoom-in-left">
          <img src={mockupBio} alt="Mockup bio link" />
        </div>
      </div>

      {/* 🎨 Beneficios */}
      <section className="bio-beneficios">
        <h2 className="titulo-impactante">🌟 Ideal para:</h2>
        <div className="bio-beneficios-grid">
          {[
            'Creadoras de contenido',
            'Emprendedoras digitales',
            'Modelos y artistas',
            'Negocios locales y tiendas online',
            'Portafolios personales',
          ].map((b, i) => (
            <div key={i} className="beneficio-card" data-aos="fade-up" data-aos-delay={i * 100}>
              ✅ {b}
            </div>
          ))}
        </div>
      </section>

      {/* 🖼 Galería */}
      <section id="bio-galeria" className="bio-galeria">
        <h2 className="titulo-impactante">🔗 Ejemplos de Bio Links Personalizados</h2>
        <div className="galeria-redisenos">
          {[ejemplo1, ejemplo2, ejemplo3, ejemplo4].map((img, i) => (
            <a href={img} key={i} target="_blank" rel="noopener noreferrer">
              <div className="proyecto-img" data-aos="fade-up" data-aos-delay={i * 100}>
                <img src={img} alt={`Bio Link ${i + 1}`} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ❓ FAQ */}
      <section className="uiux-faq">
        <h2 className="titulo-impactante">❓ Preguntas Frecuentes</h2>
        <details>
          <summary>¿Puedo elegir los colores e íconos?</summary>
          <p>Sí, personalizamos cada bio link a tu marca o estilo.</p>
        </details>
        <details>
          <summary>¿En qué dispositivos funciona?</summary>
          <p>Funciona en todos los navegadores móviles y de escritorio.</p>
        </details>
        <details>
          <summary>¿Puedo actualizarlo luego?</summary>
          <p>Sí, puedes solicitar cambios o rediseños posteriores.</p>
        </details>
      </section>

      {/* 🔥 CTA Final */}
      <section className="uiux-cta">
        <h2 className="titulo-impactante">
          Potencia tu presencia en redes con un bio link inolvidable.
        </h2>
        <div className="cta-buttons">
          <a
            href={`https://wa.me/${whatsapp}?text=${mensajeBio}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-principal"
          >
            Crear mi Bio Link
          </a>
        </div>
      </section>
    </section>
  );
}
