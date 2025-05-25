import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import abeja from '../../assets/abejas/abeja1.png'; // Ajusta si tu ruta cambia

const AbejasParticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="abejas"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: 'transparent' },
        particles: {
          number: { value: 8, density: { enable: true, area: 800 } },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            outModes: 'out',
          },
          shape: {
            type: 'image',
            image: {
              src: abeja,
              width: 32,
              height: 32,
            },
          },
          size: {
            value: 25,
            random: true,
          },
          opacity: {
            value: 0.8,
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

export default AbejasParticles;
