import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ProductCard from "../product-card/ProductCard";
import { Container, Row, Col, Button } from "reactstrap";

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigate function

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Container>
      <Row>
        <Col lg="12" className="mb-5">
          <h2 className="popular__menu-title">Shopping Cart</h2>
        </Col>
        {cartItems.length === 0 ? (
          <Col lg="12">
            <p>Your cart is empty</p>
          </Col>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                <ProductCard item={item} />
              </Col>
            ))}
            <Col lg="12" className="text-center mt-4">
            <div style={{ marginBlock: '10px', fontSize: '1.25rem', fontWeight: 'bold' ,color:"white"}}>
                Total Price: ${totalPrice.toFixed(2)}
              </div>   <div className="d-flex justify-content-center">
                <button onClick={clearCart} className="me-2">
                  Clear Cart
                </button>
                <button  onClick={() => navigate('/menu')}>
                  Go to Menu
                </button>
              </div>
           
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
