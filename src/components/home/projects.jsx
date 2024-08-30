import React from "react";
import { img } from "../img/img";

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
      {/* <div className="card">
        <div className="info_card">
          <h1>Regiones</h1>
          <img src={img.Regiones} alt="" className="Card_img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error
            reprehenderit labore provident tempora facilis, voluptates nam at
            illo minima sapiente. Quae praesentium dignissimos non eligendi
            culpa saepe modi delectus?
          </p>
        </div>
      </div>
      <div className="card">
        <div className="info_card">
          <h1>Regiones</h1>
          <img src={img.Regiones} alt="" className="Card_img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius error
            reprehenderit labore provident tempora facilis, voluptates nam at
            illo minima sapiente. Quae praesentium dignissimos non eligendi
            culpa saepe modi delectus?
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
