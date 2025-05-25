import React from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesFondo = () => {
  const particlesInit = async (engine) => {
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
          color: { value: '#00cfff' },
          links: {
            enable: true,
            color: '#00cfff',
            distance: 130,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: 'out',
          },
          size: {
            value: 2.5,
            random: true,
          },
          opacity: {
            value: 0.4,
            random: false,
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
