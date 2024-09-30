import React from "react";
import { img } from "../img/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="ctn_projects block">
      <div className="ctn_card">
        <div className="style_card">
          <img src={img.Regiones} alt="Img" className="Card_img" />
          <p>
            <span className="highlight">"Regiones"</span> es una plataforma
            dedicada a la venta de cafés y productos relacionados, que busca
            conectar a los caficultores con los amantes del café. Aquí, los
            caficultores pueden presentar sus marcas y productos, y los usuarios
            pueden descubrir cafés de diversas regiones.
          </p>
          <a href="https://regiones-front.vercel.app/home" target="_blank" className="lk_prj">
            <FontAwesomeIcon icon={faFolder} />
            Visita La Pagina
          </a>
        </div>
      </div>
      <div className="ctn_card">
        <div className="style_card">
          <img src={img.Cardiag} alt="Img" className="Card_img" />
          <p>
            <span className="highlight">"CarDiag"</span> es una plataforma
            intuitiva que ayuda a los usuarios de automoviles a conocer las
            fallas que tienen sus vehiculos y de esa forma poder agendar citas
            en diferentes talleres automovilisticos ademas de poder comprar
            repuestos y visualizar la factura correspondiente.
          </p>
          <a
            href="https://github.com/JuanDa900/CarDiag"
            target="_blank"
            className="lk_prj"
          >
            <FontAwesomeIcon icon={faFolder} />
            Visita El Repositorio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
