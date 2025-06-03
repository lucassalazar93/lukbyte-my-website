import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import BeeModel from './BeeModel';
import * as THREE from 'three';

function AbejaControlada() {
  const abejaRef = useRef();
  const [t] = useState(() => ({
    opacity: 0,
    scale: 0.4,
    x: 0,
    y: 0,
    z: -8, // Más lejos para que entre mejor
  }));
  const [flotar, setFlotar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicios = document.getElementById('servicios');
      if (servicios) {
        const rect = servicios.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setFlotar(isVisible);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    if (!flotar && abejaRef.current) {
      if (elapsed < 5) {
        t.opacity = Math.min(1, t.opacity + 0.02);
        t.scale = Math.min(1.5, t.scale + 0.03);
        t.z = THREE.MathUtils.lerp(t.z, 0, 0.04);

        abejaRef.current.position.set(t.x, t.y, t.z);
        abejaRef.current.scale.set(t.scale, t.scale, t.scale);

        abejaRef.current.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.transparent = true;
            child.material.opacity = t.opacity;
          }
        });
      }
    }

    if (flotar && abejaRef.current) {
      const floatY = Math.sin(elapsed * 2) * 0.2;
      abejaRef.current.position.y = t.y + floatY;
    }
  });

  return <BeeModel ref={abejaRef} />;
}

export default function AbejaNarrativa() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        pointerEvents: 'none',
        mixBlendMode: 'normal',
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <Environment preset="city" />
        <AbejaControlada />
      </Canvas>
    </div>
  );
}
