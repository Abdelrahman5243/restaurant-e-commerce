import React, { useContext } from "react";
import "./product-card.css";
import CartContext from "../../context/CartContext";

const ProductCard = (props) => {
  const { title, imgUrl, price } = props.item;
  const { addItem, removeItem, cartItems } = useContext(CartContext);

  // Check if the item is in the cart
  const isInCart = cartItems.some((item) => item.id === props.item.id);

  return (
    <div className="single__product">
      <div className="product__img">
        <img loading="lazy" src={imgUrl} alt={title} className="w-full" />
      </div>

      <div className="product__content">
        <div className="rating text-center flex justify-center space-x-1">
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-line"></i>
          </span>
        </div>

        <h6 className="text-lg font-semibold">{title}</h6>

        <div className="flex items-center justify-between">
          <span className="price flex items-center">
            Price: $<span>{price}</span>
          </span>
          <button
            className="shopping__icon"
            onClick={() => {
              isInCart ? removeItem(props.item.id) : addItem(props.item);
            }}
          >
            <i
              className={
                isInCart ? "ri-delete-bin-line" : "ri-shopping-cart-line"
              }
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
