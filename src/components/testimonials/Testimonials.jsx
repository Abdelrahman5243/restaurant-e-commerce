import React from "react";
import { Container, Row, Col } from "reactstrap";
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
      <Container>
        <Row>
          <Col lg="8" sm="12" md="12" className="m-auto">
            <div className="slider__wrapper d-flex align-items-center gap-5  ">
              <div className="slider__content w-50">
                <h2 className="mb-4 ps-3">{testimonialData.title}</h2>
                <Slider {...settings}>
                  {testimonialData.cards.map((data , index) => (
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
              <div className="slider__img w-50">
                <img  loading="lazy" src={testimonialData.imgUrl} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
