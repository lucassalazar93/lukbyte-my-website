// DesarrolloWeb.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import abeja1 from '../../assets/abejas/abeja1.png';
import abeja2 from '../../assets/abejas/abeja2.png';
import abeja3 from '../../assets/abejas/abeja3.png';
import mockupImg from '../../assets/mockups/dev-mockup.png';

import portadaPanaderia from '../../assets/proyectos/panaderiavip-1.jpeg';
import internoPanaderia from '../../assets/proyectos/panaderiavip-2.jpeg';
import portadaNaturista from '../../assets/proyectos/tienda-naturista (1).jpeg';
import internoNaturista from '../../assets/proyectos/tienda-naturista (2).jpeg';
import portadaInspira from '../../assets/proyectos/cursos (1).jpeg';
import internoInspira from '../../assets/proyectos/cursos (2).jpeg';

import './DesarrolloWeb.css';

export default function DesarrolloWeb() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsapp = '573150399322';

  const demoMessage = encodeURIComponent(
    '¡Hola! Estoy interesada en una demo gratuita de sus servicios web. ¿Podemos agendar una? 💻'
  );

  const asesoriaMessage = encodeURIComponent(
    '¡Hola! Quiero agendar una asesoría personalizada para el desarrollo de mi sitio web. 📅'
  );

  return (
    <section className="desarrollo-container">
      {/* HERO */}
      <div className="hero-section">
        <motion.img
          src={abeja1}
          alt="abeja"
          className="abeja-float top-left"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.img
          src={abeja2}
          alt="abeja"
          className="abeja-float top-right"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.img
          src={abeja3}
          alt="abeja"
          className="abeja-float bottom-left"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <div className="hero-text">
          <h1>Creamos experiencias web únicas y funcionales</h1>
          <p>
            Transformamos tus ideas en sitios web modernos, optimizados y listos para convertir.
          </p>
          <div className="hero-buttons">
            <a className="btn-secundario" href="/servicios/ejemplos#web">
              🔍 Ver ejemplos
            </a>

            {/* 🚨 Aquí va el cambio */}
            <a
              href="http://localhost:5173/agendar"
              className="btn-secundario"
              target="_blank"
              rel="noopener noreferrer"
            >
              📅 Asesoria Gratis
            </a>
          </div>
        </div>

        <div className="hero-mockup">
          <img src={mockupImg} alt="Mockup desarrollo" />
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className="beneficios-section">
        <h2>¿Por qué elegir desarrollo personalizado?</h2>
        <p>
          En Lukbyte, no usamos plantillas genéricas. Diseñamos sitios desde cero, pensados para
          crecer contigo y diferenciarte en lo digital.
        </p>
        <ul className="beneficios-lista">
          <li>✅ SEO desde el primer código</li>
          <li>✅ Rendimiento óptimo y mobile-first</li>
          <li>✅ Escalabilidad garantizada</li>
          <li>✅ Código limpio y modular</li>
          <li>✅ Adaptación 100% a tu marca</li>
        </ul>
      </div>

      {/* PROCESO */}
      <section className="proceso-section">
        <h2>¿Cómo trabajamos tu sitio web?</h2>
        <div className="proceso-grid">
          {[
            { icon: '🔍', title: 'Descubrimiento y estrategia' },
            { icon: '📝', title: 'Boceto y prototipado' },
            { icon: '🎨', title: 'Diseño visual personalizado' },
            { icon: '💻', title: 'Desarrollo front y backend' },
            { icon: '🧪', title: 'QA, optimización y SEO' },
            { icon: '🚀', title: 'Entrega y acompañamiento' },
          ].map((paso, i) => (
            <motion.div
              key={i}
              className="proceso-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="proceso-icon">{paso.icon}</div>
              <p>{paso.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section className="portafolio-section">
        <h2>Casos de Éxito</h2>
        <div className="portafolio-grid">
          {[
            {
              portada: portadaPanaderia,
              interno: internoPanaderia,
              nombre: 'Panadería VIP',
              tecnologias: 'React · Tailwind · Firebase',
              resultado: '+60% pedidos online en el primer mes',
              testimonio:
                'Lukbyte nos diseñó una tienda que transmite nuestra esencia. Ahora vendemos 24/7.',
            },
            {
              portada: portadaNaturista,
              interno: internoNaturista,
              nombre: 'Tienda Natural Belleza',
              tecnologias: 'React · Firebase',
              resultado: '+40% tráfico en 30 días',
              testimonio:
                'Gracias a Lukbyte lanzamos nuestra tienda en 15 días. Las clientas aman el diseño.',
            },
            {
              portada: portadaInspira,
              interno: internoInspira,
              nombre: 'Cursos Inspira',
              tecnologias: 'WordPress · Stripe',
              resultado: 'Automatización de pagos y matrícula',
              testimonio: 'Me ayudaron a escalar mi academia digital con eficiencia y estética.',
            },
          ].map((proy, i) => (
            <motion.div
              key={i}
              className="proyecto-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="proyecto-imgs">
                <Zoom>
                  <img src={proy.portada} alt={`${proy.nombre} portada`} className="proyecto-img" />
                </Zoom>
                <Zoom>
                  <img
                    src={proy.interno}
                    alt={`${proy.nombre} interior`}
                    className="proyecto-img interior"
                  />
                </Zoom>
              </div>
              <h3>{proy.nombre}</h3>
              <p className="tecnologia">{proy.tecnologias}</p>
              <p className="resultado">{proy.resultado}</p>
              <p className="testimonio">“{proy.testimonio}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-lista">
          <details>
            <summary>¿Cuánto tarda el desarrollo?</summary>
            <p>Entre 2 a 4 semanas dependiendo de la complejidad del sitio.</p>
          </details>
          <details>
            <summary>¿Puedo actualizar el contenido yo mismo?</summary>
            <p>Sí, entregamos sitios autoadministrables o con panel personalizado.</p>
          </details>
          <details>
            <summary>¿Incluye mantenimiento?</summary>
            <p>Ofrecemos planes opcionales de soporte técnico y actualizaciones mensuales.</p>
          </details>
          <details>
            <summary>¿Qué necesito tener para comenzar?</summary>
            <p>
              Solo tu idea, referencias visuales si tienes, y contenido inicial. Nosotros guiamos el
              resto.
            </p>
          </details>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <h2>¿Listo para transformar tu presencia online?</h2>
        <div className="cta-botones">
          <a
            href={`https://wa.me/${whatsapp}?text=${demoMessage}`}
            target="_blank"
            rel="noreferrer"
            className="btn-principal"
          >
            💬 Demo gratuita
          </a>
          <a
            href="http://localhost:5173/agendar"
            className="btn-secundario"
            target="_blank"
            rel="noopener noreferrer"
          >
            📅 Agendar una asesoría
          </a>
        </div>
      </section>
    </section>
  );
}
