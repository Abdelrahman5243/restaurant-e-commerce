import React from "react";
import "./download.css";
import { download } from "./downloadData";

import { Container, Row, Col } from "reactstrap";

const Download = () => {
  return (
    <section>
      <Container className="app__container" id="Contact">
        <Row>
          <Col lg="6" md="6">
            <div className="app__img">
              <img  loading="lazy" src={download.imgUrl} alt="" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="app__content">
              <h5>{download.title}</h5>
              <h2 className="mb-4">{download.description}</h2>
              <p>{download.info}</p>

              <div className="app__btns d-flex align-items-center gap-5 mt-4">
                <button className="btn__apple d-flex align-items-center gap-3">
                  <i className="ri-apple-line"></i> <a href="https://www.apple.com/store">{download.Button.apple}</a>
                </button>

                <button className="btn__google d-flex align-items-center gap-3">
                  <i className="ri-google-play-line"></i>{" "}
                  <a href="https://play.google.com">{download.Button.google}</a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Download;
