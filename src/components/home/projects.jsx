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
              <a href="URL_DE_TU_PAGINA" className="btn-link">
                Visita la página
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="info_card">
              <h1>CarDiag</h1>
              <img src={img.Regiones} alt="" className="Card_img" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique a, alias saepe eius provident, ducimus explicabo fugit
                deleniti adipisci numquam nostrum perferendis. Est cumque esse
                quam facere nostrum? Consequatur corrupti et mollitia! Illum,
                aliquam praesentium.
              </p>
            </div>
            <div>
              <a href="URL_DE_TU_PAGINA" className="btn-link">
                Repositorio del proyecto
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="info_card">
              <h1>CarDiag</h1>
              <img src={img.Regiones} alt="" className="Card_img" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique a, alias saepe eius provident, ducimus explicabo fugit
                deleniti adipisci numquam nostrum perferendis. Est cumque esse
                quam facere nostrum? Consequatur corrupti et mollitia! Illum,
                aliquam praesentium.
              </p>
            </div>
            <div>
              <a href="URL_DE_TU_PAGINA" className="btn-link">
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
