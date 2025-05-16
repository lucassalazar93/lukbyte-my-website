import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import './Footer.css';

// Imágenes
import abeja1 from '../../assets/abejas/abeja1.png';
import abeja2 from '../../assets/abejas/abeja2.png';
import logoLukbyte from '../../assets/logoLukbyte.png';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import tiktok from '../../assets/icons/tiktok.png';

export default function Footer() {
  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form.current, {
        publicKey: 'TU_PUBLIC_KEY',
      })
      .then(
        () => {
          alert('Mensaje enviado con éxito');
          form.current.reset();
        },
        (error) => alert('Error al enviar el mensaje: ' + error.text)
      );
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Columna 1: Logo y descripción */}
        <div className="footer-col logo">
          <img src={logoLukbyte} alt="Lukbyte logo" className="footer-logo" />
          <p>Soluciones digitales inteligentes para marcas que quieren destacar.</p>
        </div>

        {/* Columna 2: Enlaces de navegación desde cualquier página */}
        <div className="footer-col links">
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/?scrollTo=inicio">Inicio</Link></li>
            <li><Link to="/?scrollTo=servicios">Servicios</Link></li>
            <li><Link to="/?scrollTo=proyectos">Proyectos</Link></li>
            <li><Link to="/?scrollTo=testimonios">Testimonios</Link></li>
            <li><Link to="/?scrollTo=contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Información de contacto */}
        <div className="footer-col contacto">
          <h4>Contacto</h4>
          <ul>
            <li>📍 Medellín, Colombia</li>
            <li>📞 +57 315 039 9322</li>
            <li>📧 administracionlukbyte@gmail.com</li>
            <li className="redes">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src={tiktok} alt="TikTok" />
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Formulario de cotización y boletín */}
        <div className="footer-col formulario" id="contacto">
          <h4>Solicita tu cotización</h4>
          <form ref={form} onSubmit={enviarCorreo}>
            <input type="text" name="user_name" placeholder="Nombre completo" required />
            <input type="email" name="user_email" placeholder="Correo electrónico" required />
            <textarea name="message" placeholder="¿Qué necesitas?" rows={3} required></textarea>
            <button type="submit">Enviar</button>
          </form>

          <div className="boletin">
            <p>Recibe tips y novedades exclusivas:</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Tu correo" required />
              <button>Suscribirme</button>
            </form>
          </div>
        </div>
      </div>

      {/* Mapa de ubicación */}
      <div className="footer-mapa">
        <iframe
          title="Ubicación Lukbyte"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.841011296049!2d-75.56359268573665!3d6.244198095478998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429a1f7d2c3b1%3A0x4d9e8f9e8f9e8f9e!2sMedell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1610000000000!5m2!1ses!2sco"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Derechos legales y navegación legal */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lukbyte. Todos los derechos reservados.</p>
        <p>
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link> |{' '}
          <Link to="/politica-de-privacidad">Política de privacidad</Link>
        </p>
        <p>Diseñado por <strong>Lucas Salazar</strong> 💡</p>
      </div>

      {/* Abejas decorativas */}
      <img src={abeja1} alt="abeja izquierda" className="footer-abeja top-left" />
      <img src={abeja2} alt="abeja derecha" className="footer-abeja bottom-right" />
    </footer>
  );
}
