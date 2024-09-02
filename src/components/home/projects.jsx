import React from "react";
import { img } from "../img/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="info_card">
          <h1>Regiones</h1>
          <img src={img.Regiones} alt="" className="Card_img" />
          <p>
            Regiones es una plataforma dedicada a la venta de cafés y
            productos relacionados, que busca conectar a los caficultores con
            los amantes del café. Aquí, los caficultores pueden presentar sus
            marcas y productos, y los usuarios pueden descubrir cafés de
            diversas regiones.
          </p>
          <p>
            La plataforma celebra la cultura del café y facilita a los
            consumidores el acceso a productos auténticos y de calidad.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
