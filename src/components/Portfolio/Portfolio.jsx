import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import online from "../../img/online.jpg";
import rest from "../../img/rest.jpg";
import gym from "../../img/gym.jpg";
import hulu from "../../img/hulu.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img  className="img" src={online} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img"  src={rest} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img"  src={gym} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img"  src={hulu} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
