import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-container ${scrolled ? "shrink" : ""}`}>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-luk">Luk</span>
          <span className="logo-byte">byte</span>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menú de navegación */}
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        {/* Botón de cotización */}
        <div className="navbar-cta">
          <a href="#contacto" className="cotizar-btn">Solicitar cotización</a>
        </div>
      </nav>

    </header>
  );
}