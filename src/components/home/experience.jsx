import React from "react";
import { img } from "../img/img";

const Experience = () => {
  return (
    <div className="Container3 block">
      <div className="Card_xp">
        <div className="xp_info">
          <h2>Disruptive</h2>
          <h3>Frontend / Soporte Ti</h3>
          <h4>Febrero 27-2024 / Agosto 26-2024 / Practicas</h4>
          <img src={img.Logo} alt="" />
        </div>
        <div className="txt-xp">
          <p className="txt-desc">
            <strong>Liderazgo en Frontend:</strong>  Lideré el desarrollo del frontend del
            proyecto <span className="highlight">"Regiones"</span> , implementando interfaces de usuario intuitivas
            y funcionales para garantizar una experiencia atractiva.
          </p>
          <p className="txt-desc">
            <strong>Liderazgo de Proyecto:</strong>  Asumí el rol de líder del proyecto,
            coordinando las fases de desarrollo, gestionando el equipo y
            asegurando el cumplimiento de objetivos y plazos.
          </p>
          <p className="txt-desc">
            <strong>Soporte y Mantenimiento:</strong>  Formé parte del equipo de soporte y
            mantenimiento, supervisando la resolución de problemas y la
            implementación de mejoras para garantizar la estabilidad y el
            rendimiento óptimo de los sistemas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
