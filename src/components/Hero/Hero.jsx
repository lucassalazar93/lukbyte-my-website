import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Hero.module.css';

import abeja1 from '../../assets/abejas/abeja1.png';
import abeja2 from '../../assets/abejas/abeja2.png';
import abeja3 from '../../assets/abejas/abeja3.png';
import logo from '../../assets/logoLukbyte.png';

const abejaData = [
  { src: abeja1, className: styles.topLeft },
  { src: abeja2, className: styles.topRight },
  { src: abeja3, className: styles.bottomLeft },
  { src: abeja1, className: styles.bottomRight },
  { src: abeja2, className: styles.centerLeft },
  { src: abeja3, className: styles.centerRight }
];

const Hero = () => {
  const controls = useRef(abejaData.map(() => useAnimation()));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPositions = abejaData.map(() => {
        const dx = Math.random() * 100 - 50;
        const dy = Math.random() * 100 - 50;
        return { x: dx, y: dy };
      });

      controls.current.forEach((ctrl, i) => {
        ctrl.start({
          x: newPositions[i].x,
          y: newPositions[i].y,
          transition: { duration: 0.4, ease: 'easeOut' }
        });

        setTimeout(() => {
          ctrl.start({ x: 0, y: 0, transition: { duration: 1, ease: 'easeOut' } });
        }, 1000);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={`${styles.hero} panal-fondo`}>
      {/* 🐝 Abejas inteligentes */}
      {abejaData.map((abeja, i) => (
        <motion.img
          key={i}
          src={abeja.src}
          alt={`abeja-${i}`}
          className={`${styles.abeja} ${abeja.className}`}
          animate={controls.current[i]}
          whileHover={{ scale: 1.3, rotate: 15 }}
        />
      ))}

      {/* 👑 Logo animado */}
      <motion.img
        src={logo}
        alt="Logo Lukbyte"
        className={`${styles.logo} ${styles.heroLogo}`}
        initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* 📝 Texto con CTA */}
      <motion.div
        className={styles.texto}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <h1 className={styles.heroTitle}>
          Impulsa Tu Negocio Con <span className={styles.highlight}>Lukbyte</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Soluciones Digitales e Inteligentes Que Trabajan Por Ti <strong>24/7</strong>
        </p>
        <a href="#servicios" className={styles.ctaButton}>
          Descubre Nuestros Servicios
        </a>
      </motion.div>

      {/* 🔽 Flecha scroll */}
      <motion.div
        className={styles.flecha}
        animate={{ y: [0, 10, 0], opacity: [1, 0.6, 1] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span>▼</span>
        <p className={styles.scrollHint}>Desliza para ver más</p>
      </motion.div>
    </section>
  );
};

export default Hero;
