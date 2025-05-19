import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ✅ Variables de entorno
const GA_ID = import.meta.env.VITE_GA_ID;
const HOTJAR_ID = 6408577; // Puedes mover esto a VITE_HOTJAR_ID si prefieres

// ✅ Inicializador de Google Analytics
function AnalyticsInitializer() {
  useEffect(() => {
    if (!GA_ID) return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
}

// ✅ Inicializador de Hotjar
function HotjarInitializer() {
  useEffect(() => {
    if (!HOTJAR_ID) return;

    const script = document.createElement('script');
    script.innerHTML = `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.head.appendChild(script);
  }, []);

  return null;
}

// ✅ Componente raíz
function Main() {
  return (
    <StrictMode>
      <AnalyticsInitializer />
      <HotjarInitializer />
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
