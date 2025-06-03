import React from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesFondo = () => {
  const particlesInit = async (engine) => {
    // Solución correcta: usamos loadFull en lugar de engine.checkVersion
    await loadFull(engine);
  };

  return (
    <Particles
      id="tech-fondo"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: 'transparent' },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
            onHover: {
              enable: true,
              mode: 'repulse', // efecto al pasar el mouse
            },
          },
          modes: {
            repulse: {
              distance: 70,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: '#00eaff' },
          links: {
            enable: true,
            color: '#00eaff',
            distance: 110,
            opacity: 0.2,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: 'out',
          },
          size: {
            value: 1.8,
            random: true,
          },
          opacity: {
            value: 0.25,
            random: true,
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default ParticlesFondo;
