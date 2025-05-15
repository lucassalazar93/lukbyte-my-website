import React from "react";
import "./Proyectos.css";
import { proyectos } from "./proyectosData";

// ✅ Importa correctamente las abejas desde assets
import abeja1 from "../../assets/abejas/abeja1.png";
import abeja2 from "../../assets/abejas/abeja2.png";

export default function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="titulo-proyectos">
        Proyectos <span className="lukbyte">Más Recientes</span>
      </h2>

      <div className="proyectos-grid">
        {proyectos.map((item, i) => (
          <div className="proyecto-card" key={i}>
            <div className="proyecto-img-wrapper">
              <img src={item.img} alt={item.titulo} />
            </div>
            <h3>{item.titulo}</h3>
            <p>{item.subtitulo}</p>
            <a href="#" className="btn-ver">
              Ver Más
            </a>

            {/* 🐝 Abejas decorativas visibles con ruta correcta */}
            {i === 0 && (
              <img
                src={abeja1}
                className="abeja-card top-left"
                alt="abeja decorativa"
              />
            )}
            {i === 1 && (
              <img
                src={abeja2}
                className="abeja-card bottom-right"
                alt="abeja decorativa"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
