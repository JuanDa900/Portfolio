import React from "react";
import { img } from "../img/img";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const Projects = () => {
  return (
    <div className="card_container">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        className="product-slider"
        breakpoints={{
          530: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div className="card">
            <div className="info_card">
              <h1>Regiones</h1>
              <img src={img.Regiones} alt="" className="Card_img" />
              <p>
                <span className="highlight">"Regiones"</span> es una plataforma
                dedicada a la venta de cafés y productos relacionados, que busca
                conectar a los caficultores con los amantes del café. Aquí, los
                caficultores pueden presentar sus marcas y productos, y los
                usuarios pueden descubrir cafés de diversas regiones.
              </p>
            </div>
            <div>
              <a
                href="https://regiones-front.vercel.app/home"
                className="btn-link"
                target="_blank"
              >
                Visita la página
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="info_card">
              <h1>CarDiag</h1>
              <img src={img.Cardiag} alt="" className="Card_img" />
              <p>
                <span className="highlight">"CarDiag"</span> es una plataforma
                intuitiva que ayuda a los usuarios de automoviles a conocer las
                fallas que tienen sus vehiculos y de esa forma poder agendar
                citas en diferentes talleres automovilisticos ademas de poder
                comprar repuestos y visualizar la factura correspondiente.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/JuanDa900/CarDiag"
                className="btn-link"
                target="_blank"
              >
                Repositorio del proyecto
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
