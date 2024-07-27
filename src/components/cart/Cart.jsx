import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ProductCard from "../product-card/ProductCard";

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigate function

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price*item.quantity, 0);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full mb-5 px-4">
          <h2 className="popular__menu-title text-2xl font-bold">
            Shopping Cart
          </h2>
        </div>
        {cartItems.length === 0 ? (
          <div className="w-full px-4">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 px-4"
                key={index}
              >
                <ProductCard item={item} isInCartPage="true" />
              </div>
            ))}
            <div className="w-full text-center mt-4 px-4">
              <div className="mb-4 text-xl font-bold text-white">
                Total Price: ${totalPrice.toFixed(2)}
              </div>
              <div className="flex justify-center space-x-2">
                <button
                  onClick={clearCart}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => navigate("/menu")}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Go to Menu
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
