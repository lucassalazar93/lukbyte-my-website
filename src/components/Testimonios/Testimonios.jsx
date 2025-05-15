import React from "react"; // ✅ NECESARIO
import { motion } from "framer-motion";
import "./Testimonios.css";

// ✅ Importa las imágenes correctamente desde assets
import pedro from "../../assets/clientes/cliente1.png";
import diego from "../../assets/clientes/cliente2.png";
import cristian from "../../assets/clientes/cliente3.png";

// ✅ Lista de clientes
const clientes = [
  {
    nombre: "Lukas S",
    texto: "Gracias a Lukbyte, nuestro sitio web ahora es rápido, moderno y profesional. ¡Un equipo increíble!",
    img: pedro,
    rating: 5
  },
  {
    nombre: "Diana G",
    texto: "Lukbyte transformó mi negocio digital. ¡Altamente recomendados!",
    img: diego,
    rating: 5
  },
  {
    nombre: "Maria M",
    texto: "Impecable servicio. Siempre atentos y cumplieron con cada detalle técnico. ¡100% recomendados!",
    img: cristian,
    rating: 5
  }
];

export default function Testimonios() {
  return (
    <section className="testimonios" id="testimonios">
      <h2 className="testimonios-title">
        Testimonios <span className="lukbyte">De Clientes</span>
      </h2>

      <div className="testimonios-grid">
        {clientes.map((cli, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={cli.img} alt={cli.nombre} className="cliente-foto" />
            <p className="testimonial-text">{cli.texto}</p>
            <h3>{cli.nombre}</h3>
            <div className="estrellas">{"★".repeat(cli.rating)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
