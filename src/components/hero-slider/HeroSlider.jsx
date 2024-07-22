import React from "react";
import Slider from "react-slick";
import { sliderData } from "../../assets/fake-data/slider";
import "./slider.css";

const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="Home">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index}>
              <div className="slider__wrapper flex items-center justify-between pt-5">
                <div className="slider__content w-1/2 px-2">
                  <h2 className="mb-3  text-2xl font-bold">{item.title}</h2>
                  <p>{item.desc}</p>
                  <button className="btn">Explore Food</button>
                </div>

                <div className="slider__img w-1/2">
                  <img
                    loading="lazy"
                    src={item.imgUrl}
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
