import React from "react";
import "./footer.css";
import { footer } from "./footerData";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full mb-8">
              <div className="logo">
                <h2 className="flex items-center gap-1 mb-4">
                  <span>
                    <i className="ri-restaurant-2-line"></i>
                  </span>
                  <img src={logo} alt="" className="logo-icon" />
                </h2>
                <p>{footer.description}</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
              <h5 className="footer__link-title text-xl font-semibold">
                {footer.infoLinks.title}
              </h5>
              <ul>
                {footer.infoLinks.content.map((item, index) => (
                  <li key={index} className="link__item mb-2">
                    <a href="#links" className="text-blue-500 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
              <h5 className="footer__link-title text-xl font-semibold">
                {footer.quickLinks.title}
              </h5>
              <ul>
                {footer.quickLinks.content.title.map((item, index) => (
                  <li key={index} className="link__item mb-2">
                    <a
                      href={footer.quickLinks.content.link[index]}
                      className="text-blue-500 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
              <h5 className="footer__link-title text-xl font-semibold">
                {footer.contact.title}
              </h5>
              <ul>
                {footer.contact.contentInfo.map((item, index) => (
                  <li
                    key={index}
                    className="link__item flex items-center gap-3 mb-2"
                  >
                    <i className={item.icon}></i>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container mx-auto px-8">
          <div className="flex">
            <div className="w-full text-center">
              <p>{footer.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
