import React from "react";
import "./testimonial.css";
import { testimonialData } from "./testimonialData";

import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="design-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-11/12 md:w-11/12 lg:w-8/12 mx-auto">
            <div className="slider__wrapper flex items-center gap-8">
              <div className="slider__content w-1/2 px-3">
                <h2 className="mb-4 text-2xl font-bold">
                  {testimonialData.title}
                </h2>
                <Slider {...settings}>
                  {testimonialData.cards.map((data, index) => (
                    <div key={index}>
                      <div className="single__testimonial">
                        <p className="review__content">{data.content}</p>
                        <h6>{data.name}</h6>
                        <p>{data.role}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="slider__img w-1/2">
                <img
                  loading="lazy"
                  src={testimonialData.imgUrl}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
