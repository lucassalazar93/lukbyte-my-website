import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css';
import { Spanish } from 'flatpickr/dist/l10n/es';
import './Agendar.css';
import Confetti from 'react-confetti';

export default function AgendarLukbyte() {
  const [fecha, setFecha] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState('');
  const [mostrarGracias, setMostrarGracias] = useState(false);

  // ✅ Nuevos estados para mantener la info confirmada
  const [fechaConfirmada, setFechaConfirmada] = useState(null);
  const [horaConfirmada, setHoraConfirmada] = useState('');

  const horas = [
    '9:00am',
    '9:15am',
    '9:30am',
    '9:45am',
    '10:00am',
    '10:15am',
    '10:30am',
    '5:00pm',
    '5:15pm',
    '5:30pm',
  ];

  const handleHoraClick = (hora) => setHoraSeleccionada(hora);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fecha || !horaSeleccionada) {
      alert('Por favor selecciona una fecha y una hora.');
      return;
    }

    // ✅ Guardar datos confirmados antes de reiniciar
    setFechaConfirmada(fecha);
    setHoraConfirmada(horaSeleccionada);

    setMostrarGracias(true);
    setFecha(null);
    setHoraSeleccionada('');
  };

  const generarLinkWhatsApp = () => {
    const telefono = '573150399322';
    const mensaje = `Hola Lukbyte 👋 Acabo de agendar una reunión para mi demo gratis el *${formatoFecha(fechaConfirmada)}* a las *${horaConfirmada}* y quisiera saber qué necesito para que nuestra cita sea todo un éxito 🚀`;
    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  };

  const formatoFecha = (f) =>
    f
      ? f.toLocaleDateString('es-CO', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '';

  return (
    <section className="scheduler">
      {mostrarGracias && (
        <>
          <Confetti />
          <div className="gracias-modal">
            <div className="gracias-card">
              <h2>🎉 ¡Gracias por agendar!</h2>
              <p>Tu cita ha sido registrada exitosamente.</p>

              <div className="resumen-cita glow">
                📅 <strong>{formatoFecha(fechaConfirmada)}</strong>
                <br />
                🕒 <strong>{horaConfirmada}</strong>
              </div>

              <div className="flechas-animadas">⬇️⬇️⬇️</div>
              <p className="nota-cita">
                Confirma la informacion que debes de tener para el dia de la cita.
              </p>

              <a
                href={generarLinkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                📩 Recibir detalles por WhatsApp
              </a>

              <button onClick={() => setMostrarGracias(false)} className="gracias-btn">
                ✨ Cerrar
              </button>
            </div>
          </div>
        </>
      )}

      <div className="scheduler-container">
        {/* Panel izquierdo */}
        <div className="scheduler-info">
          <h2>✨ 15 Min Demo</h2>
          <p>Primer paso para transformar tu presencia digital</p>
          <ul>
            <li>✅ Requiere confirmación</li>
            <li>⏱️ 20 minutos</li>
            <li>🎥 Google Meet</li>
            <li>🌍 América/Bogotá</li>
          </ul>
        </div>

        {/* Calendario */}
        <div className="scheduler-calendar">
          <h3>📅 Calendario</h3>
          <Flatpickr
            options={{
              inline: true,
              locale: Spanish,
              minDate: 'today',
              dateFormat: 'Y-m-d',
              disableMobile: true,
            }}
            value={fecha}
            onChange={([date]) => setFecha(date)}
          />
          <div className="selection-display">
            {fecha ? `📅 ${formatoFecha(fecha)}` : 'Selecciona una fecha'}
          </div>
        </div>

        {/* Horarios */}
        <div className="scheduler-times">
          <h3>🕒 Horas disponibles</h3>
          <div className="time-buttons">
            {horas.map((hora) => (
              <button
                key={hora}
                className={hora === horaSeleccionada ? 'active' : ''}
                onClick={() => handleHoraClick(hora)}
              >
                {hora}
              </button>
            ))}
          </div>
          <div className="selection-display">
            {horaSeleccionada ? `🕒 ${horaSeleccionada}` : 'Selecciona una hora'}
          </div>

          {horaSeleccionada && fecha && (
            <form onSubmit={handleSubmit}>
              <button type="submit" className="confirm-btn pop">
                ✅ Confirmar {formatoFecha(fecha)} a las {horaSeleccionada}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="note">
        <a href="#">¿Tienes algún inconveniente? Haz clic aquí</a>
      </div>
    </section>
  );
}
