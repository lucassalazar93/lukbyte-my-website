import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css';
import { Spanish } from 'flatpickr/dist/l10n/es';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './Agendar.css';
import Confetti from 'react-confetti';
import { enviarCitaAGoogleCalendar } from '../utils/crearEventoGoogle';
import { enviarCorreoConfirmacion } from '../utils/enviarCorreo';

export default function Agendar() {
  const [fecha, setFecha] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState('');
  const [mostrarGracias, setMostrarGracias] = useState(false);
  const [fechaConfirmada, setFechaConfirmada] = useState(null);
  const [horaConfirmada, setHoraConfirmada] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    numero: '',
    servicio: '',
    presupuesto: '',
    negocio: '',
  });

  const horas = [
    '9:00',
    '9:15',
    '9:30',
    '9:45',
    '10:00',
    '10:15',
    '10:30',
    '17:00',
    '17:15',
    '17:30',
  ];

  const handleHoraClick = (hora) => setHoraSeleccionada(hora);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fecha || !horaSeleccionada) {
      alert('Por favor selecciona una fecha y una hora.');
      return;
    }

    const fechaFormateada = fecha.toISOString().split('T')[0];
    const descripcion = `Cita con ${formData.nombre} (${formData.email})\nServicio: ${formData.servicio}\nPresupuesto: ${formData.presupuesto}\nTeléfono: ${formData.numero}\nNegocio: ${formData.negocio}`;

    await enviarCitaAGoogleCalendar({
      titulo: `Cita - ${formData.servicio}`,
      descripcion,
      fecha: fechaFormateada,
      hora: horaSeleccionada,
    });

    await enviarCorreoConfirmacion({
      nombre: formData.nombre,
      email: formData.email,
      numero: formData.numero,
      servicio: formData.servicio,
      presupuesto: formData.presupuesto,
      negocio: formData.negocio,
      fecha: fechaFormateada,
      hora: horaSeleccionada,
    });

    setFechaConfirmada(fecha);
    setHoraConfirmada(horaSeleccionada);
    setMostrarGracias(true);
    setFecha(null);
    setHoraSeleccionada('');
  };

  const generarLinkWhatsApp = () => {
    const telefono = '573150399322';
    const mensaje = `Hola Lukbyte 👋\n\nHe agendado una demo gratuita para el *${formatoFecha(
      fechaConfirmada
    )}* a las *${horaConfirmada}*.\n\nAquí están mis datos:\n\n🧑‍💼 *Nombre:* ${formData.nombre}\n📧 *Email:* ${formData.email}\n📱 *WhatsApp:* ${formData.numero}\n💼 *Servicio:* ${formData.servicio}\n💰 *Presupuesto:* ${formData.presupuesto}\n📝 *Negocio:* ${formData.negocio}\n\n¡Quedo atento a la reunión! 🚀`;
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
              <h2>
                🎉 ¡Gracias por agendar, <span className="resaltar">{formData.nombre}</span>!
              </h2>
              <p>Tu cita ha sido registrada exitosamente.</p>
              <div className="resumen-cita glow">
                📅 <strong>{formatoFecha(fechaConfirmada)}</strong>
                <br />
                🕒 <strong>{horaConfirmada}</strong>
              </div>
              <div className="flechas-animadas">⬇️⬇️⬇️</div>
              <p className="nota-cita">
                Confirma la información que debes de tener para el día de la cita.
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
        <div className="scheduler-info">
          <h2>✨ 15 Min Demo</h2>
          <p>Primer paso para transformar tu presencia digital</p>
          <ul>
            <li>✅ Requiere confirmación</li>
            <li>⏱️ 20 minutos</li>
            <li>🎥 Google Meet</li>
            <li>🌍 América/Bogotá</li>
          </ul>

          <form className="demo-form">
            <input
              type="text"
              placeholder="Tu Nombre *"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <PhoneInput
              country={'co'}
              value={formData.numero}
              onChange={(phone) => setFormData({ ...formData, numero: phone })}
              inputProps={{ name: 'phone', required: true }}
              containerStyle={{ width: '100%' }}
              inputStyle={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid #222',
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                color: '#e0f7ff',
                fontSize: '0.95rem',
                fontFamily: 'Poppins, sans-serif',
              }}
              buttonStyle={{ background: '#101c2c', border: 'none' }}
            />
            <select
              required
              value={formData.servicio}
              onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
            >
              <option value="">Selecciona un servicio *</option>
              <option value="Diseño Web">Diseño Web</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Funnels">Funnels</option>
              <option value="E-commerce">E-commerce</option>
            </select>
            <select
              required
              value={formData.presupuesto}
              onChange={(e) => setFormData({ ...formData, presupuesto: e.target.value })}
            >
              <option value="">Presupuesto *</option>
              <option value="300 a 700 USD">300 a 700 USD</option>
              <option value="701 a 1500 USD">701 a 1500 USD</option>
              <option value="Más de 1500 USD">Más de 1500 USD</option>
            </select>
            <textarea
              placeholder="Cuéntanos un poco de qué trata tu negocio *"
              rows={3}
              required
              value={formData.negocio}
              onChange={(e) => setFormData({ ...formData, negocio: e.target.value })}
            ></textarea>
          </form>
        </div>

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
