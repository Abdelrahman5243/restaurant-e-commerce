import React, { useContext } from "react";
import "./product-card.css";
import CartContext from "../../context/CartContext";

const ProductCard = (props) => {
  const { title, imgUrl, price, id, quantity } = props.item;
  const isInCartPage = props.isInCartPage ;
  const { addItem, removeItem, increaseQuantity, decreaseQuantity, cartItems } = useContext(CartContext);

  // Check if the item is in the cart
  const isInCart = cartItems.some((item) => item.id === id);

  return (
    <div className="single__product">
      <div className="product__img">
        <img loading="lazy" src={imgUrl} alt={title} className="w-full max-h-[190px]" />
      </div>

      <div className="product__content">
        {isInCartPage && (
          <div className="text-center flex justify-center items-center space-x-1">
            <span onClick={() => increaseQuantity(id)}>
              <i className="ri-add-line"></i>
            </span>
            <span className="flex justify-center items-center bg-yellow-500 rounded-full w-6 h-6">
              {quantity}
            </span>
            <span onClick={() => decreaseQuantity(id)}>
              <i className="ri-subtract-line"></i>
            </span>
          </div>
        )}


        <h6 className="text-lg font-semibold my-4">{title}</h6>

        <div className="flex items-center justify-between">
          <span className="price flex items-center">
            Price: £<span>{price*quantity}</span>
          </span>
          <button
            className="shopping__icon"
            onClick={() => {
              isInCart ? removeItem(id) : addItem(props.item);
            }}
          >
            <i className={isInCart ? "ri-delete-bin-line" : "ri-shopping-cart-line"}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
