import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import confettiAnimation from '../../assets/animations/confetti.json';
import abeja from '../../assets/abejas/abeja2.png';
import { supabase } from '../../lib/supabaseClient';
import './SeccionGancho.css';

const SeccionGancho = () => {
  const [totalSeconds, setTotalSeconds] = useState(30000);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setShowMessage(false);

    const cleanedWhatsapp = whatsapp.replace(/[^\d]/g, ''); // elimina todo excepto números
    const isWhatsappValid = cleanedWhatsapp.length >= 8;
    const isEmailValid = email.trim() !== '';
    const isNombreValid = nombre.trim() !== '';

    if (!isNombreValid || (!isWhatsappValid && !isEmailValid)) {
      alert(
        'Por favor ingresa tu nombre y al menos un medio de contacto válido (correo o WhatsApp).'
      );
      setLoading(false);
      return;
    }

    const { error } = await supabase.from('suscripciones').insert([
      {
        nombre: nombre.trim(),
        email: isEmailValid ? email.trim().toLowerCase() : null,
        whatsapp: isWhatsappValid ? cleanedWhatsapp : null,
        origen: 'regalo-home',
      },
    ]);

    setLoading(false);

    if (error) {
      console.error('❌ Error al guardar:', error.message);
      alert('Ocurrió un error. Intenta más tarde.');
    } else {
      setSuccess(true);
      setEmail('');
      setNombre('');
      setWhatsapp('');
      setShowConfetti(true);
      setShowMessage(true);

      // 🎵 Sonido de celebración (desde carpeta public)
      new Audio('/sounds/aplausos.mp4').play();

      // 🎉 Confeti y descarga automática
      setTimeout(() => setShowConfetti(false), 4000);

      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/pdfs/5_claves_lukbyte.pdf';
        link.download = '5_claves_lukbyte.pdf';
        link.click();
      }, 2000);
    }
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

      {showMessage && (
        <div className="gracias-modal">
          <div className="gracias-card">
            <button className="cerrar-x" onClick={() => setShowMessage(false)}>
              ✖
            </button>
            <Lottie animationData={confettiAnimation} loop={false} style={{ height: 100 }} />
            <h2>🎉 ¡Felicitaciones!</h2>
            <p>
              Estás dando un <strong>paso real</strong> hacia una web que{' '}
              <em>trabaja por ti 24/7</em>. Aprovecha este impulso antes de que sea tarde —{' '}
              <strong>el momento es ahora</strong>. 💥🚀
            </p>
            <button onClick={() => setShowMessage(false)}>Listo, continuar</button>
          </div>
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

        <form onSubmit={handleSubmit} className="form-suscripcion">
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Tu correo electrónico (opcional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PhoneInput
            country={'co'}
            placeholder="Tu número de WhatsApp (opcional)"
            value={whatsapp}
            onChange={setWhatsapp}
            inputProps={{
              name: 'whatsapp',
              required: false,
            }}
            inputClass="phone-input-custom"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : '📩 Quiero mi guía ahora'}
          </button>
          {success && (
            <p className="mensaje-exito">
              ¡Gracias! Tu guía se está descargando automáticamente 🎉
            </p>
          )}
        </form>

        <p className="confianza-gancho">+128 emprendedores ya la descargaron esta semana 🚀</p>
      </motion.div>
    </section>
  );
};

export default SeccionGancho;
