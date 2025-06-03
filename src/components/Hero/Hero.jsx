import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

import ParticlesFondo from './ParticlesFondo';

const Hero = () => {
  const handleScroll = () => {
    const target = document.querySelector('#servicios');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: '-100vh' }} // efecto desde arriba
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* 🎥 Video de fondo */}
      <video
        className={styles.videoFondo}
        src="/videos/videoHero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌫️ Overlay */}
      <div className={styles.overlay}></div>

      {/* ✨ Partículas */}
      <ParticlesFondo />

      {/* 📝 Título y subtítulo */}
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

      {/* 🚀 Botón CTA */}
      <motion.div
        className={styles.centerCta}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <button onClick={handleScroll} className={styles.ctaButton}>
          Descubrir nuestros servicios
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
