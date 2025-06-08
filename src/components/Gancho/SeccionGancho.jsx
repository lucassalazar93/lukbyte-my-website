import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import confettiAnimation from '../../assets/animations/confetti.json';
import abeja from '../../assets/abejas/abeja2.png';
import './SeccionGancho.css';

const SeccionGancho = () => {
  const [totalSeconds, setTotalSeconds] = useState(30000); // 8h 20min
  const [showConfetti, setShowConfetti] = useState(false);
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const reminderTimeout = setTimeout(() => {
      if (window.scrollY < 100) setShowReminder(true);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(reminderTimeout);
    };
  }, []);

  const format = (value) => String(value).padStart(2, '0');
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const handleDownload = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <section id="regalo" className="seccion-gancho-nivel-dios">
      <img src={abeja} className="abeja-api mid-right" alt="abeja decorativa" />

      {showConfetti && (
        <div className="lottie-confetti">
          <Lottie animationData={confettiAnimation} loop={false} />
        </div>
      )}

      {showReminder && (
        <div className="popup-recordatorio">
          💡 Aún puedes reclamar tu regalo gratuito. Solo por tiempo limitado...
        </div>
      )}

      <motion.div
        className="contenido-gancho"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="texto-flotante">🎁 Regalo exclusivo. Solo disponible por tiempo limitado</p>

        <div className="contador-impactante">
          {format(hours)} <span>:</span> {format(minutes)} <span>:</span> {format(seconds)}
        </div>

        <h2 className="titulo-impactante">¿Por qué tu web aún no vende?</h2>

        <h3 className="subtitulo">
          Descubre las <span>“5 claves invisibles”</span> que usan las marcas que sí conectan
        </h3>

        <p className="descripcion-gancho">
          Esta guía no es teoría. Es la fórmula que usamos con negocios reales que pasaron de cero
          interacción a ventas reales. Descárgala antes de que desaparezca. Ya ayudó a muchos… ahora
          es tu turno. 🧠⚡
        </p>

        <a
          className="btn-primario sombra-fluor"
          href="/pdfs/5_claves_lukbyte.pdf"
          download
          onClick={handleDownload}
        >
          📩 Quiero mi guía ahora
        </a>

        <p className="confianza-gancho">+128 emprendedores ya la descargaron esta semana 🚀</p>
      </motion.div>
    </section>
  );
};

export default SeccionGancho;
