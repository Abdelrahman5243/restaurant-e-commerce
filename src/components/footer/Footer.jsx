import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { footer } from "./footerData";
import logo from "../../assets/images/logo.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className=" d-flex align-items-center gap-1 mb-4">
                  <span>
                    <i className="ri-restaurant-2-line"></i>
                  </span>{" "}
                  <img src={logo} alt="" className="logo-icon" />
                </h2>
                <p>{footer.description}</p>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">{footer.infoLinks.title}</h5>

              <ListGroup>
                {footer.infoLinks.content.map((item, index) => (
                  <ListGroupItem key={index} className="link__item">
                    <a href="#links">{item}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="2" md="4" sm="6">
              <h5 className="footer__link-title">{footer.quickLinks.title}</h5>

              <ListGroup>
                {footer.quickLinks.content.title.map((item, index) => (
                  <ListGroupItem key={index} className="link__item">
                    <a href={footer.quickLinks.content.link[index]}>{item}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">{footer.contact.title}</h5>
              <ListGroup>
                {footer.contact.contentInfo.map((item,index) => (
                  <ListGroupItem key={index} className="link__item d-flex align-items-center gap-3"> 
                    <i className={item.icon}></i>
                    {item.title}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <Row>
            <Col lg="12">
              <p>{footer.copyright}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
