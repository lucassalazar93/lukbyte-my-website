import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './DisenoUIUX.css';

// Imágenes
import abeja from '../../assets/abejas/abeja1.png';
import mockupUIUX from '../../assets/mockups/uiux-mockup.png';
import raizViva from '../../assets/proyectos/raiz-viva.png';
import brillanteEterno from '../../assets/proyectos/brillante-eterno.png';
import beautyAntes from '../../assets/proyectos/veterinaria.png';
import beautyDespues from '../../assets/proyectos/saboresFirmados.png';

export default function DisenoUIUX() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  const whatsapp = '573150399322';

  const mensajeAsesoria = encodeURIComponent(
    '¡Hola! Estoy interesada en una asesoría para mejorar la experiencia visual de mi sitio con diseño UI/UX. ✨'
  );
  const mensajeImpacto = encodeURIComponent(
    '¡Hola Lukbyte! Me gustaría crear una interfaz moderna, atractiva y efectiva para mi negocio. 🎨'
  );

  return (
    <section className="uiux-container">
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

      {/* 🎯 Hero emocional */}
      <div className="uiux-hero">
        <div className="uiux-hero-text">
          <h1 className="titulo-impactante" data-aos="fade-up">
            Interfaces que aumentan conversiones y fidelizan usuarios.
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Convertimos tu visión en productos digitales que impactan, enamoran y hacen crecer tu
            negocio.
          </p>
          <div className="uiux-hero-buttons">
            <a
              className="btn-principal"
              href={`https://wa.me/${whatsapp}?text=${mensajeAsesoria}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              🎨 Agendar asesoría de diseño
            </a>
            <a className="btn-secundario" href="/servicios/ejemplos#uiux">
              🔍 Ver ejemplos
            </a>
          </div>
        </div>
        <div className="uiux-mockup" data-aos="zoom-in-left">
          <img src={mockupUIUX} alt="Mockup interfaz Figma" />
        </div>
      </div>

      {/* ⭐ Beneficios */}
      <section className="uiux-beneficios">
        <h2 className="titulo-impactante">✨ ¿Por qué el diseño UI/UX es esencial?</h2>
        <p>
          El diseño UI/UX no es solo estética. Es la clave para crear experiencias fluidas,
          memorables y eficaces.
        </p>
        <div className="uiux-beneficios-grid">
          {[
            '✅ Mejora la tasa de conversión',
            '✅ Aumenta el tiempo de permanencia',
            '✅ Reduce errores y frustración',
            '✅ Refuerza tu identidad visual',
            '✅ Mejora la accesibilidad y el SEO',
          ].map((item, i) => (
            <div key={i} className="beneficio-card" data-aos="fade-up" data-aos-delay={i * 100}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🛠 Proceso */}
      <section className="uiux-proceso">
        <h2 className="titulo-impactante">🛠 Nuestro proceso de diseño UI/UX</h2>
        <div className="uiux-timeline">
          {[
            '🎯 Brief de necesidades y análisis UX',
            '📊 Wireframes y arquitectura',
            '🎨 Diseño visual UI (Figma, Adobe XD)',
            '🧪 Prototipado interactivo',
            '🔍 Pruebas de usabilidad',
            '🚀 Entrega optimizada para desarrollo',
          ].map((step, i) => (
            <div key={i} className="timeline-step" data-aos="zoom-in" data-aos-delay={i * 150}>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* 🖼 Galería UI/UX visual */}
      <section className="uiux-portafolio">
        <h2 className="titulo-impactante">🎨 Algunos proyectos que transformaron negocios</h2>
        <div className="galeria-redisenos">
          {[raizViva, brillanteEterno, beautyAntes, beautyDespues].map((img, i) => (
            <a href={img} key={i} target="_blank" rel="noopener noreferrer">
              <div className="proyecto-img" data-aos="fade-up" data-aos-delay={i * 100}>
                <img src={img} alt={`Rediseño ${i + 1}`} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 💡 Principios */}
      <section className="uiux-principios">
        <h2 className="titulo-impactante">💡 Diseño centrado en el usuario</h2>
        <div className="principios-grid">
          {[
            'Jerarquía visual',
            'Psicología del color',
            'Tipografía legible',
            'Accesibilidad (WCAG)',
            'Diseño modular y responsive',
            'Microinteracciones',
          ].map((p, i) => (
            <div key={i} className="principio-card" data-aos="fade-up">
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* 🗣 Testimonios */}
      <section className="uiux-testimonios">
        <h2 className="titulo-impactante">🗣 Lo que dicen nuestros clientes</h2>
        <div className="testimonio-card" data-aos="fade-right">
          <p>
            “Nuestra app se volvió mucho más clara e intuitiva. Las clientas entienden al instante
            cómo usarla.”
          </p>
          <span>— Karla R., BeautyApp</span>
        </div>
        <div className="testimonio-card" data-aos="fade-left">
          <p>
            “Antes la gente se perdía. Hoy nos felicitan por lo fácil que es usar nuestro sistema.”
          </p>
          <span>— Pedro S., Gestión360</span>
        </div>
      </section>

      {/* ❓ FAQ */}
      <section className="uiux-faq">
        <h2 className="titulo-impactante">❓ Preguntas frecuentes</h2>
        <details>
          <summary>¿Puedo pedir solo el diseño sin desarrollo?</summary>
          <p>
            ¡Claro! Ofrecemos diseño como servicio independiente para que lo uses con cualquier
            equipo de desarrollo.
          </p>
        </details>
        <details>
          <summary>¿Con qué herramientas trabajan?</summary>
          <p>Figma, Adobe XD, Notion, Zeplin y más según el proyecto.</p>
        </details>
        <details>
          <summary>¿Incluye tests de accesibilidad?</summary>
          <p>Sí, aplicamos criterios WCAG para garantizar interfaces inclusivas.</p>
        </details>
        <details>
          <summary>¿Puedo dar feedback durante el proceso?</summary>
          <p>¡Por supuesto! Es clave para crear un producto alineado contigo.</p>
        </details>
      </section>

      {/* 🔥 CTA Final */}
      <section className="uiux-cta">
        <h2 className="titulo-impactante">
          Diseñemos una experiencia que tu cliente no olvide <br /> ¿Empezamos hoy?
        </h2>
        <div className="cta-buttons">
          <a
            href={`https://wa.me/${whatsapp}?text=${mensajeImpacto}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-principal"
          >
            Quiero una interfaz que impacte
          </a>
          <a
            href={`https://wa.me/${whatsapp}?text=${mensajeAsesoria}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secundario"
          >
            Agendar asesoría gratuita
          </a>
        </div>
      </section>
    </section>
  );
}
