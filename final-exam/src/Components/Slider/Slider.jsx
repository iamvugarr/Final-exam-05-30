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
                <h1>A New world is coming</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                  in nam laborum maxime! Incidunt libero porro atque sapiente.
                  Voluptatem recusandae alias perspiciatis ad accusantium
                  deleniti corporis porro obcaecati architecto nemo.
                </p>
                <a className="slider-btn" href="/">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider slider1">
          <div className="slider-container">
            <div className="row-slider">
              <div className="row-element">
                <h1>A New world is coming</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                  in nam laborum maxime! Incidunt libero porro atque sapiente.
                  Voluptatem recusandae alias perspiciatis ad accusantium
                  deleniti corporis porro obcaecati architecto nemo.
                </p>
                <a className="slider-btn" href="/">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
