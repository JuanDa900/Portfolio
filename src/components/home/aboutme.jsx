import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Abuotme = () => {
  return (
    <div>
      <div className="txt_container">
        <div className="txt-me">
          <p>
            {/* <p>
              ¡Hola! Mi nombre es Juan David Arévalo Ramírez y tengo 18 años. Soy de Colombia,
              un país lleno de vibrantes culturas. Mi interés
              por el desarrollo de software comenzó hace menos de 3 años, pero
              durante este tiempo he aprendido y crecido enormemente en este
              campo apasionante.
            </p>
            <p>
              Actualmente, soy graduado como técnico en desarrollo de software y
              continúo mis estudios para convertirme en un profesional en este
              ámbito. Durante mis prácticas en una empresa, tuve la oportunidad
              de experimentar un aprendizaje profundo y significativo.
            </p>
            <p>
              En mis prácticas, no solo adquirí conocimientos técnicos valiosos,
              sino que también lideré el equipo de soporte y mantenimiento, así
              como el proyecto en el que estuve involucrado durante 6 meses.
              Esta experiencia me permitió proponer ideas innovadoras, designar
              tareas y contribuir de manera significativa al éxito del proyecto.
            </p>
            <p>
              Mi objetivo es seguir creciendo en este campo, desarrollando mis
              habilidades y contribuyendo a proyectos innovadores. Estoy
              emocionado por lo que el futuro me depara en el mundo del
              desarrollo de software.
            </p> */}
            <p>
              <strong>¡Hola!</strong> soy <span className="highlight">Juan David Arévalo Ramírez</span>, un joven colombiano de 18
              años apasionado por el desarrollo de software. Comencé en este
              campo <span className="highlight">hace menos de 3 años</span> y, desde entonces, he crecido
              enormemente. Me gradué como <span className="highlight">técnico en desarrollo de software</span> y
              continúo mi formación para ser un profesional. Durante mis
              prácticas, lideré un equipo de soporte y proyectos, donde adquirí
              valiosos conocimientos y propuse ideas innovadoras. Mi meta es
              seguir desarrollando mis habilidades y contribuir a proyectos que
              impulsen la innovación en este campo emocionante.
            </p>
          </p>
        </div>
      </div>
      <h1 className="Separator2">Habilidades</h1>
      <div className="skills_container">
        <ul className="ls_skills">
          <li>
            <FontAwesomeIcon icon={faReact} />
            React
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} />
            Java Script
          </li>
          <li>
            <FontAwesomeIcon icon={faNodeJs} />
            Node js
          </li>
          <li>
            <FontAwesomeIcon icon={faDatabase} />
            MYsql
          </li>
          <li>
            <FontAwesomeIcon icon={faHtml5} />
            HTML
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3Alt} />
            Css
          </li>
        </ul>
        <ul className="ls_skills">
          <li>
            <FontAwesomeIcon icon={faPython} />
            Python
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} />
            Django
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            ux ui
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Abuotme;
