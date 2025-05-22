import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import abeja1 from '../assets/abejas/abeja1.png';
import abeja2 from '../assets/abejas/abeja2.png';
import abeja3 from '../assets/abejas/abeja3.png';
import nosotrosImg from '../assets/mockups/nosotros.png';

import './Nosotros.css';

export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);

  const whatsapp = '573150399322';
  const mensaje = encodeURIComponent(
    '¡Hola Lukbyte! Quiero trabajar con ustedes en mi proyecto digital 💻📲'
  );

  return (
    <section className="nosotros-container">
      {/* HERO */}
      <div className="hero-nosotros">
        <motion.img
          src={abeja1}
          alt="abeja"
          className="abeja top-left"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.img
          src={abeja2}
          alt="abeja"
          className="abeja bottom-right"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.img
          src={abeja3}
          alt="abeja"
          className="abeja top-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="hero-text">
          <h1 data-aos="fade-up">Detrás de Lukbyte</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Somos Lucas y Nore, una dupla real que une tecnología y estrategia para transformar
            marcas en experiencias digitales inolvidables.
          </p>
          <a
            href={`https://wa.me/${whatsapp}?text=${mensaje}`}
            target="_blank"
            rel="noreferrer"
            className="btn-principal"
          >
            💬 Hablemos por WhatsApp
          </a>
        </div>

        <div className="hero-img">
          <img src={nosotrosImg} alt="Lukbyte mockup" />
        </div>
      </div>

      {/* SECCIÓN QUIÉNES SOMOS */}
      <section className="quienes-somos">
        <h2 data-aos="fade-up">¿Quiénes Somos?</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          En Lukbyte, creemos que cada idea merece ser visible, recordada y admirada. Somos un
          equipo apasionado por la tecnología, el diseño y el poder de lo digital para transformar
          negocios.
        </p>
        <p data-aos="fade-up" data-aos-delay="200">
          Ayudamos a emprendedores, marcas personales y pequeñas empresas a llevar su esencia al
          mundo digital, desarrollando páginas web y embudos de venta personalizados que conectan,
          automatizan y generan resultados. Nuestra misión es ser ese puente entre lo que sueñas y
          lo que puedes lograr online, con cercanía, profesionalismo y un enfoque humano.
        </p>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="mision-vision-section">
        <div className="mision-box" data-aos="fade-right">
          <h3>🎯 Misión</h3>
          <p>
            Impulsar el crecimiento de negocios y emprendedores mediante soluciones digitales
            personalizadas como páginas web y embudos de venta, que automatizan procesos, fortalecen
            la identidad de marca y permiten vender de manera constante, profesional y
            emocionalmente conectada.
          </p>
        </div>
        <div className="vision-box" data-aos="fade-left">
          <h3>🚀 Visión</h3>
          <p>
            Ser una marca reconocida por su compromiso humano y digital con los emprendedores,
            destacándonos como referentes en el desarrollo de soluciones web que inspiran, conectan
            y generan impacto real y sostenible.
          </p>
        </div>
      </section>

      {/* VALORES CORPORATIVOS */}
      <section className="valores-section">
        <h2 data-aos="fade-up">Valores Corporativos</h2>
        <ul className="valores-lista">
          <li data-aos="zoom-in">
            💛 Cercanía: Escuchamos con atención y hablamos con el corazón.
          </li>
          <li data-aos="zoom-in" data-aos-delay="100">
            🎯 Profesionalismo: Cuidamos cada detalle para ofrecer soluciones de calidad.
          </li>
          <li data-aos="zoom-in" data-aos-delay="200">
            🌈 Creatividad: Nos encanta transformar ideas en experiencias visuales y funcionales.
          </li>
          <li data-aos="zoom-in" data-aos-delay="300">
            🔒 Compromiso: Nos tomamos cada proyecto como si fuera propio.
          </li>
          <li data-aos="zoom-in" data-aos-delay="400">
            📈 Evolución: Aprendemos, crecemos y nos adaptamos constantemente para ofrecer siempre
            lo mejor.
          </li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <section className="cta-nosotros">
        <h2 data-aos="fade-up">¿Listos para crear algo increíble juntos?</h2>
        <p data-aos="fade-up" data-aos-delay="150">
          Somos la combinación perfecta de diseño, desarrollo y estrategia. Si quieres una marca que
          impacte, este es tu momento.
        </p>
        <a
          href={`https://wa.me/${whatsapp}?text=${mensaje}`}
          target="_blank"
          rel="noreferrer"
          className="btn-principal"
        >
          📲 Comienza tu proyecto con Lukbyte
        </a>
      </section>
    </section>
  );
}
