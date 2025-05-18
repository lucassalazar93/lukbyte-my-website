import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './InvitacionesDigitales.css';

// Imágenes
import bienvenida from '../../assets/mockups/generico.jpg';
import boda from '../../assets/ejemplos/boda.png';
import quinces from '../../assets/ejemplos/quinces.png';
import primeraComunion from '../../assets/ejemplos/primeraComunion.png';
import disco from '../../assets/ejemplos/disco.png';
import empresariales from '../../assets/ejemplos/empresariales.png';

const InvitacionesDigitales = () => {
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
              href="https://wa.me/573001112233?text=Hola!%20Quiero%20una%20invitaci%C3%B3n%20digital%20para%20mi%20evento"
              className="btn-cta"
            >
              Solicita tu diseño ahora
            </a>
            <a href="#galeria" className="btn-secundario">
              Ver ejemplos
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
          {/* BODA */}
          <SwiperSlide>
            <div className="slide-content">
              <img src={boda} alt="Boda Laura & Andrés" />
              <h3>💍 Invitación Digital: Boda </h3>
              <ul className="descripcion-lista">
                <li>💖 Portada animada con nombres y fecha del evento</li>
                <li>🎵 Música personalizada</li>
                <li>📸 Galería de fotos de la pareja</li>
                <li>🗓️ Cuenta regresiva al gran día</li>
                <li>📍 Google Maps para ubicaciones</li>
                <li>📅 Itinerario del evento</li>
                <li>🫶 Mensajes personalizados para los invitados</li>
                <li>📩 Confirmación de asistencia (RSVP)</li>
                <li>🎁 Lista de regalos digital o bancaria</li>
                <li>👗 Dress code con estilo visual</li>
                <li>🌿 Diseño personalizado visual</li>
                <li>🔐 Acceso privado con contraseña</li>
                <li>📨 Compartible por redes</li>
              </ul>
            </div>
          </SwiperSlide>

          {/* QUINCES */}
          <SwiperSlide>
            <div className="slide-content">
              <img src={quinces} alt="15 años Camila" />
              <h3>🎈 Invitación de 15 años</h3>
              <ul className="descripcion-lista">
                <li>🌟 Animación con luz y brillo</li>
                <li>🎤 Música pop juvenil</li>
                <li>📷 Galería de fotos de infancia y preparativos</li>
                <li>📅 Itinerario del evento (entrada, vals, torta, etc.)</li>
                <li>📍 Ubicación Google Maps de salón</li>
                <li>💬 Confirmación automática (WhatsApp)</li>
                <li>👗 Dress code con inspiración visual</li>
              </ul>
            </div>
          </SwiperSlide>

          {/* COMUNIÓN */}
          <SwiperSlide>
            <div className="slide-content">
              <img src={primeraComunion} alt="Primera Comunión Mateo" />
              <h3>⛪ Primera Comunión</h3>
              <ul className="descripcion-lista">
                <li>🙏 Portada con diseño angelical</li>
                <li>📖 Cronograma de misa y recepción</li>
                <li>🎁 Lista de regalos religiosos u obsequios sugeridos</li>
                <li>🌍 Mapa del lugar de ceremonia</li>
                <li>📩 Confirmación y dedicatorias</li>
              </ul>
            </div>
          </SwiperSlide>

          {/* FIESTA DISCO */}
          <SwiperSlide>
            <div className="slide-content">
              <img src={disco} alt="Invitación Fiesta Disco" />
              <h3>🎶 Fiesta Electrónica / Discoteca</h3>
              <ul className="descripcion-lista">
                <li>💫 Animaciones neon, beat y efectos visuales</li>
                <li>🎧 Playlist integrada (Spotify/YouTube)</li>
                <li>📲 QR para entrar o confirmar asistencia</li>
                <li>🕺 Estética tipo flyer moderno</li>
              </ul>
            </div>
          </SwiperSlide>

          {/* EMPRESARIAL */}
          <SwiperSlide>
            <div className="slide-content">
              <img src={empresariales} alt="Invitación Evento Empresarial" />
              <h3>💼 Evento Empresarial</h3>
              <ul className="descripcion-lista">
                <li>📈 Estética sobria y elegante</li>
                <li>📝 Agenda con horarios, speakers y actividades</li>
                <li>📱 Botón de inscripción / enlace a CRM</li>
                <li>🎥 Enlace a transmisiones en vivo (Zoom, Meet)</li>
                <li>🔐 Control de acceso privado</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Puedes continuar con beneficios, testimonios, CTA final... */}
    </div>
  );
};

export default InvitacionesDigitales;
