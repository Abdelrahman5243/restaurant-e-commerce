import React from "react";
import { popularMenuFood } from "../../assets/fake-data/products";
import ProductCard from "../product-card/ProductCard";
import "./popular-menu.css";

const PopularMenu = () => {
  return (
    <section className="pt-0" id="Menu">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full mb-5 px-4">
            <h2 className="popular__menu-title text-2xl font-bold">
              Popular food menu
            </h2>
          </div>

          {popularMenuFood.map((item, index) => (
            <div
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 px-4"
              key={index}
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
