// src/components/Abeja3D.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import BeeModel from './BeeModel';

export default function Abeja3D() {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#0d1117' }}>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* 🌇 Entorno HDRI */}
        <Environment preset="city" />

        {/* 💡 Iluminación */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <pointLight position={[0, 2, 0]} intensity={1.5} />

        {/* 🐝 Modelo */}
        <BeeModel />

        {/* 🎮 Cámara */}
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}
