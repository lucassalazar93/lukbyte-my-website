import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import ParticlesFondo from './ParticlesFondo';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = () => {
    setTimeout(() => {
      const target = document.getElementById('regalo');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.warn('⚠️ No se encontró la sección con ID "regalo".');
      }
    }, 100); // Espera para asegurar que el DOM ya esté pintado
  };

  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* ✅ Video de fondo o imagen fallback */}
      {isMobile ? (
        <img
          src="/videos/fallback.png"
          alt="Fondo alternativo de la abeja cibernética"
          className={styles.fallbackImg}
        />
      ) : (
        <video
          className={styles.videoFondo}
          src="/videos/videoHero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Overlay y partículas */}
      <div className={styles.overlay}></div>
      <ParticlesFondo />

      {/* Título y subtítulo */}
      <motion.div
        className={styles.textWrapper}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className={styles.heroTitle}>
          <span className={styles.blanco}>Luk</span>
          <span className={styles.byte}>byte</span>
        </h1>
        <p className={styles.heroSubtitle}>
          “Transformamos ideas en experiencias digitales{' '}
          <span className={styles.destacado}>inolvidables.</span>”
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        className={styles.centerCta}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <button onClick={handleScroll} className={styles.ctaButton}>
          Reclamar mi regalo gratuito 🎁
        </button>
        <div className={styles.flecha}>
          <span>▼</span>
          <p className={styles.scrollHint}>Desliza para explorar</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
