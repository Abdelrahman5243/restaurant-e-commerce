import React from "react";
import { popularMenuFood } from "../../assets/fake-data/products";
import ProductCard from "../product-card/ProductCard";
import "./popular-menu.css";

const PopularMenu = () => {
  return (
    <section className="py-8" id="Menu">
      <div className="container mx-auto px-4">
        <h2 className="popular__menu-title text-2xl  mb-5 font-bold">
          Popular food menu
        </h2>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {popularMenuFood.map((item, index) => (
            <div
              className="fade-in w-full mb-4 px-4"
              key={index}
              style={{ "--i": index }}
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
