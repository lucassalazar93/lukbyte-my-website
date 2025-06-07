import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'react-medium-image-zoom/dist/styles.css';
import './InvitacionesDigitales.css';

// Imágenes
import bienvenida from '../../assets/mockups/generico.jpg';
import boda from '../../assets/ejemplos/boda.png';
import quinces from '../../assets/ejemplos/quinces.png';
import primeraComunion from '../../assets/ejemplos/primeraComunion.png';
import disco from '../../assets/ejemplos/disco.png';
import empresariales from '../../assets/ejemplos/empresariales.png';

const InvitacionesDigitales = () => {
  const demoMessage = encodeURIComponent(
    '¡Hola! 🎉 Me interesa una demo gratuita de una invitación digital. Quisiera conocer ejemplos de bodas, 15 años o eventos empresariales. ¿Podrían compartirme opciones interactivas?'
  );

  const asesoriaMessage = encodeURIComponent(
    '¡Hola! 🙋‍♀️ Me gustaría agendar una asesoría para crear una invitación digital personalizada para mi evento. ¿Cuándo podríamos conversar?'
  );

  const whatsappNumber = '573150399322';

  return (
    <div className="inv-digital-wrapper">
      {/* HERO */}
      <section className="inv-hero">
        <div className="inv-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🎉 Haz que tu evento comience desde la invitación
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Invitaciones digitales elegantes, personalizadas y 100% interactivas para bodas,
            quinceañeras, primeras comuniones, fiestas y eventos empresariales.
          </motion.p>
          <div className="inv-hero-buttons">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${demoMessage}`}
              className="btn-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar demo gratuita
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
        </div>
        <div className="inv-hero-mockup">
          <img src={bienvenida} alt="Mockup invitación" loading="lazy" />
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="inv-galeria">
        <h2>Ejemplos de Invitaciones</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides
          loop
          autoplay={{ delay: 6500 }}
          pagination={{ clickable: true }}
          effect="coverflow"
          modules={[Autoplay, Pagination, EffectCoverflow]}
        >
          {[
            {
              img: boda,
              title: '💍 Invitación Digital: Boda',
              items: [
                '💖 Portada animada con nombres y fecha',
                '🎵 Música personalizada',
                '📸 Galería de fotos',
                '🗓️ Cuenta regresiva',
                '📍 Mapa del evento',
                '📅 Itinerario',
                '💬 Mensajes a invitados',
                '📩 Confirmación de asistencia',
                '🎁 Lista de regalos',
                '👗 Dress code',
                '🌿 Diseño personalizado',
                '🔐 Acceso privado',
                '📨 Compartible por redes',
              ],
            },
            {
              img: quinces,
              title: '🎈 Quinceañera',
              items: [
                '✨ Animaciones brillantes',
                '🎤 Música pop moderna',
                '🧸 Fotos de infancia y preparación',
                '📅 Itinerario: Vals, brindis, fiesta',
                '📍 Mapa del salón',
                '👗 Vestuario sugerido',
              ],
            },
            {
              img: primeraComunion,
              title: '⛪ Primera Comunión',
              items: [
                '🕊️ Diseño angelical',
                '🕘 Misa y recepción',
                '🎁 Lista de regalos religiosos',
                '📍 Mapa de iglesia',
                '📝 Confirmación con mensaje',
              ],
            },
            {
              img: disco,
              title: '🎶 Fiesta Electrónica',
              items: [
                '💫 Visuales neon animados',
                '🎧 Playlist integrada',
                '🕺 QR para entrada',
                '📱 Diseño estilo flyer',
              ],
            },
            {
              img: empresariales,
              title: '💼 Evento Empresarial',
              items: [
                '📈 Estilo elegante y profesional',
                '🗓️ Agenda de actividades',
                '📱 Botón de inscripción',
                '💻 Link de videollamada',
                '🔐 Control de acceso',
              ],
            },
          ].map((card, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <Zoom>
                  <img src={card.img} alt={card.title} className="zoom-img" />
                </Zoom>
                <h3>{card.title}</h3>
                <ul className="descripcion-lista">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-box">
          <details>
            <summary>¿Cuánto tarda el desarrollo?</summary>
            <p>Entre 2 y 5 días hábiles según el tipo de evento.</p>
          </details>
          <details>
            <summary>¿Puedo actualizar el contenido yo mismo?</summary>
            <p>Sí. Incluimos acceso editable o servicio de cambios posteriores.</p>
          </details>
          <details>
            <summary>¿Incluye mantenimiento?</summary>
            <p>¡Sí! Mantenimiento gratuito los primeros 15 días.</p>
          </details>
          <details>
            <summary>¿Qué necesito para comenzar?</summary>
            <p>Solo tus datos, fotos y tipo de evento. Nosotros hacemos el resto.</p>
          </details>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="inv-cta-final">
        <h2>¿Listo para transformar tu evento?</h2>
        <p>Regístrate o agenda una asesoría personalizada. ¡Te guiamos paso a paso!</p>
        <div className="inv-hero-buttons">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${demoMessage}`}
            className="btn-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar demo gratuita
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${asesoriaMessage}`}
            className="btn-secundario"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar asesoría
          </a>
        </div>
      </section>
    </div>
  );
};

export default InvitacionesDigitales;
