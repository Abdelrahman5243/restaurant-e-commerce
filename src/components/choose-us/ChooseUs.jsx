import React from "react";
import "./choose-us.css";
import { chooseUS } from "./choose-usData";

const ChooseUs = () => {
  return (
    <section id="About">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img loading="lazy" src={chooseUS.imgUrl} alt="" className="w-full" />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="choose__content">
              <h4 className="text-lg font-semibold">{chooseUS.title}</h4>
              <h2 className="text-2xl font-bold">{chooseUS.description}</h2>
              <p className="mt-2">{chooseUS.info}</p>
            </div>

            <div className="features mt-4">
              <div className="feature1 flex flex-wrap gap-5">
                {chooseUS.cards.map((card, index) => (
                  <div
                    className={`single__feature flex items-center gap-5 ${index >= 2 ? "mt-3" : ""}`}
                    key={index}
                  >
                    <span className="text-xl">
                      <i className={card.icon}></i>
                    </span>
                    <div>
                      <h6 className="font-semibold">{card.title}</h6>
                      <p>{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
