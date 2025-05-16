import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Importación añadida
import abeja from "../../assets/abejas/abeja1.png";

// Íconos
import iconoWeb from "../../assets/icons/desarrolloWeb.png";
import iconoUIUX from "../../assets/icons/uiux.png";
import iconoPWA from "../../assets/icons/pwa.png";
import iconoAPI from "../../assets/icons/api.png";

import "./Servicios.css";

const servicios = [
  {
    titulo: "Desarrollo Web Personalizado",
    texto: "Creamos sitios web únicos, pedagógicos y adaptados a tus necesidades y objetivos, optimizados para todos los dispositivos.",
    icono: iconoWeb,
    ruta: "/servicios/desarrollo-web",
  },
  {
    titulo: "Diseño UI-UX Profesional",
    texto: "Transformamos ideas en interfaces visualmente atractivas y fáciles de usar, priorizando la experiencia del usuario.",
    icono: iconoUIUX,
    ruta: "/servicios/diseno-ui-ux", // ✅ ACTIVADO
  },
  {
  titulo: "Aplicaciones Web Progresivas",
  texto: "Desarrollamos aplicaciones rápidas y funcionales que puedes instalar y usar desde cualquier dispositivo.",
  icono: iconoPWA,
  ruta: "/servicios/pwa", // ✅ Ruta habilitada
  },

  {
  titulo: "Automatización y APIs",
  texto: "Optimizamos tus procesos conectando sistemas con flujos seguros y automatizados, mejorando tu eficiencia.",
  icono: iconoAPI,
  ruta: "/servicios/automatizacion-apis", // ✅ Activado
  }
];


export default function Servicios() {
  return (
    <section className="servicios-section" id="servicios">
      {/* 🐝 Abejas decorativas */}
      <motion.img
        src={abeja}
        alt="abeja"
        className="abeja-servicio top-left"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src={abeja}
        alt="abeja"
        className="abeja-servicio bottom-right"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <h2 className="servicios-title">Nuestros Servicios</h2>

      <div className="servicios-grid">
        {servicios.map((s, i) => (
          <motion.div
            className="servicio-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <img src={s.icono} alt={s.titulo} className="servicio-icon" />
            <h3>{s.titulo}</h3>
            <p>{s.texto}</p>
            {s.ruta ? (
              <Link to={s.ruta} className="btn-ver-mas">
                Ver más
              </Link>
            ) : (
              <button className="btn-ver-mas disabled" disabled>
                Próximamente
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
