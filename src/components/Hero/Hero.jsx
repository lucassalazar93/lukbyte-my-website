import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Hero.module.css';

import abeja1 from '../../assets/abejas/abeja1.png';
import abeja2 from '../../assets/abejas/abeja2.png';
import abeja3 from '../../assets/abejas/abeja3.png';
import ParticlesFondo from './ParticlesFondo';

const abejaData = [
  { src: abeja1, className: styles.topLeft },
  { src: abeja2, className: styles.topRight },
  { src: abeja3, className: styles.bottomLeft },
  { src: abeja1, className: styles.bottomRight },
  { src: abeja2, className: styles.centerLeft },
  { src: abeja3, className: styles.centerRight },
];

const Hero = () => {
  const controls = useRef(abejaData.map(() => useAnimation()));

  useEffect(() => {
    const handleMouseMove = () => {
      const newPositions = abejaData.map(() => ({
        x: Math.random() * 60 - 30,
        y: Math.random() * 60 - 30,
      }));

      controls.current.forEach((ctrl, i) => {
        ctrl.start({
          x: newPositions[i].x,
          y: newPositions[i].y,
          transition: { duration: 1.2, ease: 'easeInOut' },
        });

        setTimeout(() => {
          ctrl.start({ x: 0, y: 0, transition: { duration: 2, ease: 'easeOut' } });
        }, 1800);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.hero}>
      <ParticlesFondo />

      {/* 🐝 Abejas flotantes */}
      {abejaData.map((abeja, i) => (
        <motion.img
          key={i}
          src={abeja.src}
          alt={`abeja-${i}`}
          className={`${styles.abeja} ${abeja.className}`}
          animate={controls.current[i]}
          whileHover={{ scale: 1.3, rotate: 10 }}
          style={{ pointerEvents: 'none' }}
        />
      ))}

      {/* 📝 Contenedor del texto alineado a la izquierda */}
      <motion.div
        className={styles.textWrapper}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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

      {/* 🚀 Botón CTA centrado */}
      <motion.div
        className={styles.centerCta}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <a href="#productos" className={styles.ctaButton}>
          Descubrir nuestros productos
        </a>
        <div className={styles.flecha}>
          <span>▼</span>
          <p className={styles.scrollHint}>Desliza para explorar</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
