import React from "react";
import "./download.css";
import { download } from "./downloadData";

const Download = () => {
  return (
    <section>
      <div className="container mx-auto px-4" id="Contact">
        <div className="app__container flex flex-wrap">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="app__img">
              <img
                loading="lazy"
                src={download.imgUrl}
                alt=""
                className="w-full"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="app__content px-4">
              <h5 className="text-xl font-medium">{download.title}</h5>
              <h2 className="mb-4 text-2xl font-bold">
                {download.description}
              </h2>
              <p>{download.info}</p>

              <div className="app__btns flex items-center gap-5 mt-4">
                <button className="btn__apple flex items-center gap-3">
                  <i className="ri-apple-line"></i>
                  <a href="https://www.apple.com/store">
                    {download.Button.apple}
                  </a>
                </button>

                <button className="btn__google flex items-center gap-3">
                  <i className="ri-google-play-line"></i>
                  <a href="https://play.google.com">{download.Button.google}</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
