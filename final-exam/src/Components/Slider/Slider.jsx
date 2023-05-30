import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./slider.css";


const Slider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className="slider slider1">
          <div className="slider-container">
            <div className="row-slider">
              <div className="row-element">
                <h1>Modern Design</h1>
                <p className="first-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo ea fuga saepe eveniet distinctio sit porro officiis laboriosam eligendi? Maiores odio dolor aut, quisquam rerum corrupti tempore illo ad?</p>
                <p className="second-p">
                  <a className="btn btn-outline" href="">Get Started</a>
                  <a className="btn-link" href="">Download</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider slider2">
          <div className="slider-container">
            <div className="row-slider">
              <div className="row-element">
                <h1>Modern Design</h1>
                <p className="first-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo ea fuga saepe eveniet distinctio sit porro officiis laboriosam eligendi? Maiores odio dolor aut, quisquam rerum corrupti tempore illo ad?</p>
                <p className="second-p">
                  <a className="btn btn-outline" href="">Get Started</a>
                  <a className="btn-link" href="">Download</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
