import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "./header.css";
import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";

const navLinks = [
  {
    display: "Home",
    url: "",
  },
  {
    display: "About",
    url: "about",
  },
  {
    display: "Menu",
    url: "menu",
  },
  {
    display: "Recipes",
    url: "recipes",
  },
  {
    display: "Contact",
    url: "contact",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const menuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-restaurant-2-line"></i>
              <img src={logo} alt="logo" className="logo-icon" />
            </span>
          </div>

          {isMenuOpen && (
            <div className="nav__menu">
              <div className="nav__list__wrapper p-4 d-flex align-items-center gap-5" ref={menuRef}>

                <div className="logo d-flex align-items-center justify-content-between ">
                  <span className="d-flex align-items-center gap-1">
                    <i className="ri-restaurant-2-line"></i>
                    <img src={logo} alt="logo" className="logo-icon" />
                  </span>
                  <i className="ri-menu-line close-nav" onClick={menuToggle}></i>

                </div>

                <ul className="nav__list_mobile">
                  {navLinks.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <Link to={`/${item.url}`}> {item.display}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <Link to={`/${item.url}`}> {item.display}</Link>
              </li>
            ))}
          </ul>


          <div>
            <span className="cart__icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="badge">2</span>
            </span>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
