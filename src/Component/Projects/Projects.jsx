import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import MusicApp from "../../img/musicapp.png";
import HOC from "../../img/hoc.png";

const Projects = () => {
  return (
    <div className="portofolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
       spaceBetween={30}
       slidesPerView={3}
       grabCursor={true}
       className="portofolio-slider"
       onSlideChange={() => console.log("slide change")}
       onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="MusicApp" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="HOC" />
        </SwiperSlide>
      </Swiper>

      {/* Projects
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) =>(
          <SwiperSlide key={slide.image}>
            <img src={slide.image} />
          </SwiperSlide>
        ))}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Projects;
