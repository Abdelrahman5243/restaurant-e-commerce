import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./choose-us.css";
import { chooseUS } from "./choose-usData";

const ChooseUs = () => {
  return (
    <section id="About">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img  loading="lazy" src={chooseUS.imgUrl} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6">
            <div className="choose__content">
              <h4>{chooseUS.title}</h4>
              <h2>{chooseUS.description}</h2>
              <p>{chooseUS.info}</p>
            </div>

            <div className="features mt-4">
              <div className="feature1 d-flex align-items-center gap-5">
                <div className="single__feature">
                  <span>
                    <i className="ri-truck-line"></i>
                  </span>
                  <h6>{chooseUS.cards[0].title}</h6>
                  <p>{chooseUS.cards[0].description}</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-two">
                    <i className="ri-money-dollar-circle-line"></i>
                  </span>
                  <h6>{chooseUS.cards[1].title}</h6>
                  <p>{chooseUS.cards[1].description}</p>
                </div>
              </div>

              <div className="feature1 mt-3 d-flex align-items-center gap-5">
                <div className="single__feature">
                  <span className="feature__icon-3">
                    <i className="ri-secure-payment-line"></i>
                  </span>
                  <h6>{chooseUS.cards[2].title}</h6>
                  <p>{chooseUS.cards[2].description}</p>
                </div>

                <div className="single__feature">
                  <span className="feature__icon-4">
                    <i className="ri-24-hours-line"></i>
                  </span>
                  <h6>{chooseUS.cards[3].title}</h6>
                  <p>{chooseUS.cards[3].description}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  
};

export default ChooseUs;
