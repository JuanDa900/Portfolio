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
            Hola soy{" "}
            <span className="highlight">Juan David Arévalo Ramírez</span>{" "}
            desarrollador jr
          </h1>
          <p>
            Con 8 meses de experiencia en desarrollo de software, he contribuido
            a proyectos significativos, aplicando mi creatividad y pasión por la
            innovación para resolver desafíos técnicos y aportar soluciones
            efectivas
          </p>
        </div>
      </div>
      <div className="title_2">
        <ul className="li_text">
          <li>
            <a href="https://github.com/JuanDa900" target="_blank">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/juan-david-ar%C3%A9valo-ram%C3%ADrez-061349266/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/13rMhjEGcVg9swtRV-MF4V1Ub92j1tbOT/view?usp=sharing"
              target="_blank"
            >
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
