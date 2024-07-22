import React, { useState, useEffect } from "react";
import ProductCard from "../product-card/ProductCard";
import {
  fastFoodProducts,
  riceMenuProducts,
  pizzaProducts,
  dessertProducts,
  coffeeProducts,
} from "../../assets/fake-data/products";
import "./menu-pack.css";

const MenuPack = () => {
  const [filter, setFilter] = useState("RICE-MENU");
  const [products, setProducts] = useState(riceMenuProducts);

  useEffect(() => {
    if (filter === "RICE-MENU") {
      setProducts(riceMenuProducts);
    }
    if (filter === "FAST-FOOD") {
      setProducts(fastFoodProducts);
    }

    if (filter === "PIZZA") {
      setProducts(pizzaProducts);
    }

    if (filter === "DESSERT") {
      setProducts(dessertProducts);
    }

    if (filter === "COFFEE") {
      setProducts(coffeeProducts);
    }
  }, [filter]);

  return (
    <section id="Recipes" className="py-8">
      <div className="container mx-auto px-8">
        <div className="text-center mb-4">
          <h3 className="menu__title text-3xl font-bold">Our Menu Pack</h3>
        </div>
        <div className="text-center mb-5">
          <button
            className={`filter-btn ${
              filter === "FAST-FOOD" ? "active__btn" : ""
            } `}
            onClick={() => setFilter("FAST-FOOD")}
          >
            Fast Food
          </button>
          <button
            className={`filter-btn ${
              filter === "RICE-MENU" ? "active__btn" : ""
            } `}
            onClick={() => setFilter("RICE-MENU")}
          >
            Rice Menu
          </button>
          <button
            className={`filter-btn ${filter === "PIZZA" ? "active__btn" : ""} `}
            onClick={() => setFilter("PIZZA")}
          >
            Pizza
          </button>
          <button
            className={`filter-btn ${
              filter === "DESSERT" ? "active__btn" : ""
            } `}
            onClick={() => setFilter("DESSERT")}
          >
            Desserts
          </button>
          <button
            className={`filter-btn ${
              filter === "COFFEE" ? "active__btn" : ""
            } `}
            onClick={() => setFilter("COFFEE")}
          >
            Coffee
          </button>
        </div>

        <div className="flex flex-wrap -mx-4">
          {products.map((item, index) => (
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

export default MenuPack;
