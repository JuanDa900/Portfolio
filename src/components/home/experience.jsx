import React from "react";
import { img } from "../img/img";

const Experience = () => {
  return (
    <div className="Container3">
      <div className="Card_xp">
        <div className="xp_info">
          <h2>Disruptive</h2>
          <h3>Frontend / Soporte Ti</h3>
          <h4>Febrero 27-2024 / Agosto 26-2024 / Practicas</h4>
          <img src={img.Logo} alt="" />
        </div>
        <div className="txt-xp">
          <p className="txt-desc">
            Liderazgo en Frontend: Inicialmente, lideré el desarrollo del
            frontend de el proyecto "Regiones", donde me encargué de la
            implementación de interfaces de usuario intuitivas y funcionales,
            garantizando una experiencia fluida y atractiva para los usuarios.
          </p>
          <p className="txt-desc">
            Liderazgo de Proyecto: Posteriormente, asumí el rol de líder del
            proyecto en general, coordinando las distintas fases del desarrollo,
            gestionando el equipo y asegurando que los objetivos y plazos se
            cumplieran eficazmente.
          </p>
          <p className="txt-desc">
            Soporte y Mantenimiento: Además, formé parte del equipo de soporte y
            mantenimiento, donde también desempeñé el papel de líder. En este
            rol, supervisé la resolución de problemas y la implementación de
            mejoras continuas, garantizando la estabilidad y el rendimiento
            óptimo de los sistemas y equipos internos de la empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
