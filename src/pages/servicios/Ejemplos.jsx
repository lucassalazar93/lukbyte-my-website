// ✅ Ejemplos.jsx (componente completo mejorado)
import React, { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import PropTypes from 'prop-types';
import ScrollToHash from '../../utils/ScrollToHash';
import './Ejemplos.css';

import generico from '../../assets/ejemplos/generico.jpg';
import naturista from '../../assets/ejemplos/raiz-viva.png';
import sabor from '../../assets/ejemplos/saboresFirmados.png';
import veterinaria from '../../assets/ejemplos/veterinaria.png';
import joyeria from '../../assets/ejemplos/brillante-eterno.png';
import lashistas from '../../assets/ejemplos/lashistas.png';
import barberia1 from '../../assets/ejemplos/barberia1.png';
import barberia2 from '../../assets/ejemplos/barberia2.png';
import soyarte from '../../assets/ejemplos/soyarte.png';
import panaderiavip from '../../assets/ejemplos/panaderiavip-1.jpeg';
import panaderiavip2 from '../../assets/ejemplos/panaderiavip-2.jpeg';
import tiendaNaturista from '../../assets/ejemplos/tienda-naturista (1).jpeg';
import tiendaNaturista2 from '../../assets/ejemplos/tienda-naturista (2).jpeg';
import miel from '../../assets/ejemplos/miel.png';
import vinos from '../../assets/ejemplos/vinos.png';
import perros from '../../assets/ejemplos/perros.png';
import postres from '../../assets/ejemplos/postres.png';
import api1 from '../../assets/ejemplos/apis (1).png';
import api2 from '../../assets/ejemplos/apis (2).png';

export default function Ejemplos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToHash />
      <main className="ejemplos-container">
        {/* Hero principal */}
        <header className="ejemplos-hero">
          <h1>Explora Ejemplos de Nuestro Trabajo</h1>
          <p>
            Inspiración real. Resultados medibles.{' '}
            <strong>Proyectos listos para replicarse en tu negocio.</strong>
          </p>
          <div className="cta-superior">
            <a
              href="https://wa.me/573150399322?text=Hola!%20Quiero%20inspirarme%20con%20sus%20plantillas%20de%20ejemplo%20%F0%9F%8C%9F"
              className="btn-primario"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Solicitar por WhatsApp
            </a>
            <a href="#formulario" className="btn-secundario">
              📅 Agendar una demo
            </a>
          </div>
        </header>

        {/* Secciones por categoría */}
        <Seccion
          id="web"
          titulo="🌐 Desarrollo Web Personalizado"
          descripcion="Sitios web únicos, adaptados a tus objetivos y optimizados para convertir."
          imagenes={[
            panaderiavip,
            panaderiavip2,
            tiendaNaturista,
            tiendaNaturista2,
            miel,
            vinos,
            perros,
            postres,
          ]}
          ctaTexto="¿Te gustaría una web como esta?"
          ctaLink="https://wa.me/573150399322?text=Quiero%20una%20web%20de%20alto%20impacto"
          ctaBoton="Quiero una web de alto impacto"
        />

        <Seccion
          id="uiux"
          titulo="🎨 Diseño UI/UX Profesional"
          descripcion="Interfaces modernas, intuitivas y enfocadas en conversión."
          imagenes={[naturista, sabor, veterinaria, joyeria]}
          ctaTexto="¿Listo para enamorar a tus usuarios?"
          ctaLink="#formulario"
          ctaBoton="Agendar asesoría gratuita"
        />

        <Seccion
          id="pwa"
          titulo="📱 Aplicaciones Web Progresivas (PWA)"
          descripcion="Apps instalables desde navegador, rápidas, funcionales y sin fricción."
          imagenes={[lashistas, barberia1, barberia2, soyarte]}
          ctaTexto="¿Quieres una app ligera y sin tienda?"
          ctaLink="https://wa.me/573150399322?text=Quiero%20una%20PWA%20para%20mi%20negocio"
          ctaBoton="Crear mi App Progresiva"
        />

        <Seccion
          id="api"
          titulo="⚙️ Automatización & APIs"
          descripcion="Procesos inteligentes que ahorran tiempo y evitan errores."
          imagenes={[api1, api2]}
          ctaTexto="¿Quieres que tu negocio trabaje por ti?"
          ctaLink="https://wa.me/573150399322?text=Quiero%20automatizar%20mi%20empresa"
          ctaBoton="Automatizar mi empresa"
        />

        {/* Testimonio directo */}
        <section className="clientes-testimonios">
          <h2>💬 Lo que dicen nuestros clientes</h2>
          <blockquote>
            “Desde que rediseñamos con Lukbyte, aumentamos 40% en conversiones.”
          </blockquote>
          <p>– Claudia R., ecommerce</p>
        </section>

        {/* Cierre final tipo embudo */}
        <section className="cta-final">
          <h2>🚀 Tu proyecto puede ser el próximo caso de éxito</h2>
          <p>
            Agenda una demo o contáctanos por WhatsApp. Resolvemos tus dudas en minutos y empezamos
            hoy.
          </p>
          <div className="cta-botones">
            <a
              href="https://wa.me/573150399322?text=Hola!%20Quiero%20una%20asesoría%20rápida"
              className="btn-primario"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero asesoría rápida
            </a>
            <a href="#formulario" className="btn-secundario">
              Agendar una demo
            </a>
          </div>
        </section>

        {/* Formulario */}
        <section id="formulario" className="formulario">
          <h3>💡 Agenda una llamada</h3>
          <form>
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <textarea placeholder="¿Qué necesitas?" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
    </>
  );
}

function Seccion({ id, titulo, descripcion, imagenes, ctaTexto, ctaLink, ctaBoton }) {
  return (
    <section id={id} className="ejemplo-seccion">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <div className="ejemplo-grid">
        {imagenes.map((img, i) => (
          <Zoom key={i}>
            <img src={img} alt={`ejemplo ${id}-${i}`} loading="lazy" />
          </Zoom>
        ))}
      </div>
      <div className="cta-categoria">
        <p>{ctaTexto}</p>
        <a href={ctaLink} className="btn-cta" target="_blank" rel="noopener noreferrer">
          {ctaBoton}
        </a>
      </div>
    </section>
  );
}

Seccion.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagenes: PropTypes.arrayOf(PropTypes.string).isRequired,
  ctaTexto: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  ctaBoton: PropTypes.string.isRequired,
};
