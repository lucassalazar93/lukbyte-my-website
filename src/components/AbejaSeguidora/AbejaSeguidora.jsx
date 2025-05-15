// src/components/AbejaSeguidora/AbejaSeguidora.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import abejaImg from "../../assets/abejas/abeja1.png"; // usa tu imagen de abeja

import "./abejaSeguidora.css";

export default function AbejaSeguidora() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX + 20, y: e.clientY + 20 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.img
      src={abejaImg}
      alt="abeja seguidora"
      className="abeja-seguidora"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 60, damping: 12 }}
    />
  );
}
