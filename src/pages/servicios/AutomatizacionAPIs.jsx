import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './AutomatizacionAPIs.css';

// Imágenes
import abeja from '../../assets/abejas/abeja1.png';
import mockupAPI from '../../assets/mockups/automatizacion-dashboard.png';
import caso1 from '../../assets/proyectos/integracion-crm-api.png';
import caso2 from '../../assets/proyectos/bot-facturas-api.png';
import caso3 from '../../assets/proyectos/notificacion-api-sms.png';

export default function AutomatizacionAPIs() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  const whatsappMessage = encodeURIComponent(
    `¡Hola! Estoy interesad@ en automatizar procesos de mi negocio mediante APIs.

Me gustaría agendar un diagnóstico gratuito para identificar oportunidades de integración y eficiencia.`
  );

  const whatsappLink = `https://wa.me/573150399322?text=${whatsappMessage}`;

  return (
    <main className="api-container">
      {/* 🐝 Abejas decorativas animadas */}
      <motion.img
        src={abeja}
        alt="abeja"
        className="abeja-api top-left"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={abeja}
        alt="abeja"
        className="abeja-api mid-right"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* 🔥 HERO */}
      <section className="hero-api">
        <div className="contenido-hero" data-aos="fade-right">
          <h1 className="titulo-impactante">⚙️ Automatización & APIs Inteligentes</h1>
          <p>
            Integra, conecta y automatiza procesos clave de tu negocio con soluciones a medida.
            Aumenta tu eficiencia sin complicaciones.
          </p>
          <div className="cta-hero">
            <a
              href="http://localhost:5173/agendar"
              className="btn-secundario"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Agendar una asesoría Gratis
            </a>

            <a href="#casos-api" className="btn-secundario">
              Ver casos de uso
            </a>
          </div>
        </div>
        <div className="mockup-api" data-aos="fade-left">
          <img src={mockupAPI} alt="Automatización de procesos con APIs" />
        </div>
      </section>

      {/* 🔄 Beneficios */}
      <section className="beneficios-api">
        <h2 className="titulo-impactante">🔄 ¿Qué puedes lograr con automatización?</h2>
        <div className="grid-beneficios">
          {[
            '🔗 Integración entre sistemas',
            '⚡ Eliminación de tareas repetitivas',
            '📨 Automatización de envíos y notificaciones',
            '📊 Reportes automáticos en tiempo real',
            '🔐 Seguridad y control en el flujo de datos',
            '🧠 Inteligencia en decisiones con menos esfuerzo',
          ].map((item, i) => (
            <div className="beneficio" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🛠 Proceso */}
      <section className="proceso-api">
        <h2 className="titulo-impactante">🛠 Cómo abordamos tu proyecto de automatización</h2>
        <ul className="pasos-api">
          {[
            '🔍 Diagnóstico de procesos repetitivos o ineficientes',
            '📐 Diseño de arquitectura con APIs seguras',
            '⚙️ Desarrollo y conexión entre plataformas (CRM, ERPs, eCommerce, etc.)',
            '🚦 Validación, pruebas de carga y seguridad',
            '📈 Despliegue y monitoreo automatizado',
          ].map((paso, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={i * 120}>
              {paso}
            </li>
          ))}
        </ul>
      </section>

      {/* 📌 Casos de uso */}
      <section id="casos-api" className="casos-api">
        <h2 className="titulo-impactante">📌 Ejemplos de automatización aplicados a negocios</h2>
        <div className="grid-proyectos">
          {[
            {
              img: caso1,
              texto: '🎯 Sincronización automática de leads entre sitio web y CRM en tiempo real.',
            },
            {
              img: caso2,
              texto: '🧾 Bot de generación de facturas y envío automático a clientes cada mes.',
            },
            {
              img: caso3,
              texto:
                '📲 Sistema de recordatorios por WhatsApp y SMS conectado a calendario interno.',
            },
          ].map((caso, i) => (
            <div className="caso" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <img src={caso.img} alt={`caso-${i + 1}`} />
              <p>{caso.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section id="asesoria" className="cta-final">
        <h2 className="titulo-impactante">🚀 Deja que tu negocio trabaje por ti</h2>
        <p>
          Agenda una asesoría y descubre cómo automatizar procesos te permite ahorrar tiempo, dinero
          y errores humanos.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primario">
          Quiero automatizar mi negocio
        </a>
      </section>
    </main>
  );
}
