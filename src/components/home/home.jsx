import React from "react";
import { img } from "../img/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="images">
          <img src={img.github} alt="" className="images1" />
        </div>
        <div className="info">
        <h1>
            Hola soy <span className="highlight">Juan David Arévalo Ramírez</span> desarrollador jr
          </h1>
          <p>
            Con 8 meses de experiencia en el dinámico campo del desarrollo de
            software, he estado inmerso en un mundo de constante evolución y
            desafíos técnicos. Mi enfoque creativo y mi pasión por la innovación
            me han permitido contribuir a proyectos significativos, donde he
            aplicado mis habilidades en programación y resolución de problemas
          </p>
        </div>
      </div>
      <div className="title_2">
        <ul className="li_text">
          <li>
            <a href="https://github.com/JuanDa900">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/juan-david-arevalo-ramirez-061349266/">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faFileAlt} /> Ver CV
            </a>
          </li>
          <li>
            <a href="mailto:juandavidarevaloramirez326@gmail.com?subject=Contacto desde el portafolio&body=Hola,%20me%20interesa%20saber%20más%20sobre%20tu%20trabajo.">
              <FontAwesomeIcon icon={faEnvelope} /> Contáctame
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
