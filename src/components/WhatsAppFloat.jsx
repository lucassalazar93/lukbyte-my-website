// WhatsAppFloat.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const phoneNumber = '573150399322';
  const location = useLocation();

  let mensaje = '¡Hola! Estoy interesada en tus servicios.';

  if (location.pathname.includes('/servicios/desarrollo-web')) {
    mensaje = '¡Hola! Me interesa crear una página web para mi negocio 🚀';
  } else if (location.pathname.includes('/servicios/diseno-ui-ux')) {
    mensaje = '¡Hola! Me gustaría mejorar el diseño de mi sitio con UI/UX ✨';
  } else if (location.pathname.includes('/servicios/automatizacion-apis')) {
    mensaje = '¡Hola! Vi que ofrecen automatización con APIs. ¿Podemos hablar? ⚙️';
  } else if (location.pathname.includes('/servicios/pwa')) {
    mensaje = '¡Hola! Quiero saber cómo funciona una App Web Progresiva (PWA) 📱';
  }

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}
