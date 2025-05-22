import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setMenuOpen(false);

  return (
    <header className={`navbar-container ${scrolled ? 'shrink' : ''}`}>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/?scrollTo=inicio" onClick={handleClick}>
            <span className="logo-luk">Luk</span>
            <span className="logo-byte">byte</span>
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menú de navegación con scroll desde cualquier ruta */}
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/?scrollTo=inicio" onClick={handleClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/?scrollTo=servicios" onClick={handleClick}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/?scrollTo=proyectos" onClick={handleClick}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/?scrollTo=contacto" onClick={handleClick}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/nosotros" onClick={handleClick}>
              Nosotros
            </Link>
          </li>
        </ul>

        {/* Botón de acción principal */}
        <div className="navbar-cta">
          <a
            href={`https://wa.me/573150399322?text=${encodeURIComponent('¡Hola! Estoy interesad@ en una cotización personalizada para mi proyecto digital. ¿Podemos hablar? 😊')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cotizar-btn"
          >
            Solicitar cotización
          </a>
        </div>
      </nav>
    </header>
  );
}
