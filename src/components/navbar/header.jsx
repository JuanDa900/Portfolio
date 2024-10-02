import React, { useState, useEffect } from "react";
import ThemeToggle from "../home/theme";

const Header = () => {
  const [hasBorder, setHasBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasBorder(true);
      } else {
        setHasBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`header ${hasBorder ? "bordered" : ""}`}>
        <ul className="list-text">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia</a>
          </li>
          <ThemeToggle />
        </ul>
      </div>
    </div>
  );
};

export default Header;
