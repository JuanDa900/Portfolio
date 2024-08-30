import React from "react";
import "./App.css";
import Header from "./components/navbar/header";
import Home from "./components/home/home";
import Aboutme from "./components/home/aboutme";
import Projects from "./components/home/projects";
import Experience from "./components/home/experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faBriefcase } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <div className="header1">
        <Header />
      </div>

      <div className="body">
        <div id="inicio">
          <Home />
        </div>

        <div id="sobre-mi" className="Separator">
          <h1><FontAwesomeIcon icon={faUser} /> Sobre mí</h1>
        </div>

        <div>
          <Aboutme />
        </div>

        <div id="proyectos" className="Separator">
          <h1><FontAwesomeIcon icon={faCode} /> Proyectos</h1>
        </div>

        <div>
          <Projects />
        </div>

        <div id="experiencia" className="Separator">
          <h1><FontAwesomeIcon icon={faBriefcase} /> Experiencia</h1>
        </div>

        <div>
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
