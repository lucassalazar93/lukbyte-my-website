// src/pages/TerminosCondiciones.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import abeja from '../assets/abejas/abeja1.png';
import './terminos.css';

export default function TerminosCondiciones() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="terminos-container">
      {/* 🐝 Abeja decorativa animada */}
      <motion.img
        src={abeja}
        alt="abeja flotante"
        className="abeja-fixed"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="terminos-content">
        <span className="updated">Última actualización: 15 de mayo de 2025</span>
        <h1>Términos y Condiciones de Uso</h1>

        <h2>1. Identidad del Prestador</h2>
        <p>
          Lukbyte es una marca dedicada al desarrollo de software, diseño web,
          branding digital y soluciones tecnológicas personalizadas.
        </p>
        <ul>
          <li><strong>Representante legal:</strong> Lucas Salazar</li>
          <li><strong>Correo de contacto:</strong> contacto@lukbyte.com</li>
          <li><strong>Sede:</strong> Medellín, Colombia</li>
        </ul>

        <h2>2. Aceptación del Usuario</h2>
        <p>Al utilizar nuestros servicios, aceptas estos términos. Si no estás de acuerdo, abstente de utilizarlos.</p>

        <h2>3. Servicios Ofrecidos</h2>
        <p>Desarrollo web, diseño de identidad visual, plataformas digitales, automatización y soporte técnico.</p>

        <h2>4. Propiedad Intelectual</h2>
        <p>Todo contenido creado por Lukbyte es propiedad intelectual salvo acuerdo explícito.</p>

        <h2>5. Responsabilidad del Usuario</h2>
        <p>El usuario debe utilizar los servicios de forma ética, legal y segura.</p>

        <h2>6. Confidencialidad y Protección de Datos</h2>
        <p>Respetamos la privacidad según la Ley 1581 de 2012. Consulta nuestra Política de Privacidad.</p>

        <h2>7. Garantías y Limitaciones</h2>
        <p>No somos responsables por fallas externas ni mal uso del software entregado.</p>

        <h2>8. Pagos y Contrataciones</h2>
        <p>Todo servicio debe ser cotizado previamente. Puede requerir anticipo.</p>

        <h2>9. Cancelaciones y Reembolsos</h2>
        <p>Las cancelaciones serán evaluadas caso por caso. No hay reembolsos por desarrollo iniciado.</p>

        <h2>10. Modificaciones</h2>
        <p>Podemos modificar estos términos. Te recomendamos consultarlos periódicamente.</p>

        <h2>11. Jurisdicción</h2>
        <p>Estos términos se rigen por la legislación colombiana. Toda disputa será resuelta en Medellín.</p>

        <p className="contacto">📩 ¿Tienes dudas? Escríbenos a contacto@lukbyte.com</p>
      </div>
    </section>
  );
}
