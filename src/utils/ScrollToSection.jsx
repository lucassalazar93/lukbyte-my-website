// src/utils/ScrollToSection.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const section = new URLSearchParams(location.search).get("scrollTo");

  useEffect(() => {
    if (section) {
      // Esperar a que cargue la vista
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 100); // Ajusta si es necesario
    }
  }, [section]);

  return null;
};

export default ScrollToSection;

