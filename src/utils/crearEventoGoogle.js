// src/utils/crearEventoGoogle.js

export const enviarCitaAGoogleCalendar = async ({ titulo, descripcion, fecha, hora }) => {
  const start = new Date(`${fecha}T${hora}:00-05:00`); // Hora local Colombia
  const end = new Date(start.getTime() + 20 * 60 * 1000); // 20 minutos después

  try {
    const response = await fetch('http://localhost:5000/api/crear-evento', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary: titulo,
        description: descripcion,
        startTime: start.toISOString(),
        endTime: end.toISOString(),
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Evento creado en Google Calendar.');
      return result.eventLink; // link al evento
    } else {
      console.error('❌ Error desde backend:', result.error);
    }
  } catch (error) {
    console.error('❌ Error al conectarse al backend:', error);
  }
};
