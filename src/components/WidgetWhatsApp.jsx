import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function WidgetWhatsApp() {
  const location = useLocation();

  // Mensaje predeterminado
  let mensaje = '¡Hola! Vi tu sitio web y quiero más información 🤖';

  if (location.pathname.includes('/servicios/desarrollo-web')) {
    mensaje = '¡Hola! Me interesa una página web profesional para mi negocio 🚀';
  } else if (location.pathname.includes('/servicios/diseno-ui-ux')) {
    mensaje = '¡Hola! Quiero mejorar el diseño UI/UX de mi sitio ✨';
  } else if (location.pathname.includes('/servicios/automatizacion-apis')) {
    mensaje = '¡Hola! Me interesa automatizar procesos con APIs ⚙️';
  } else if (location.pathname.includes('/servicios/pwa')) {
    mensaje = '¡Hola! Quiero saber más sobre las PWAs y cómo funcionan 📱';
  }

  useEffect(() => {
    const existingWidget = document.getElementById('wh-widget-send-button');

    if (existingWidget) {
      existingWidget.remove(); // ✅ Limpia el widget anterior si cambia de página
    }

    const script = document.createElement('script');
    script.src = 'https://static.getbutton.io/widget-send-button/js/init.js';
    script.async = true;

    script.onload = () => {
      window.WhWidgetSendButton.init('getbutton.io', 'https:', {
        whatsapp: '573150399322',
        call_to_action: '¿Tienes dudas? Escríbenos 💬',
        position: 'right',
        button_color: '#25D366',
        order: 'whatsapp',
        pre_filled_message: mensaje,
      });
    };

    document.body.appendChild(script);
  }, [location.pathname]); // 🔁 Reactiva cuando cambie la ruta

  return null;
}
