import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handlechange }) => {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  // Remove an item from the cart
  const handleRemove = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };

  // Calculate total price
  const handlePrice = useCallback(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount * item.price;
    });
    setPrice(total);
  }, [cart]);

  useEffect(() => {
    handlePrice();
  }, [handlePrice]);

  // Handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add items to proceed.");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div>
      <article>
        {/* Check if cart is empty */}
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty!</h2>
            <p>Looks like you haven’t added anything to your cart yet.</p>
          </div>
        ) : (
          cart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.img} alt={item.title} />
                <p>
                  {item.title} <span className="item_price">₹{item.price}</span>
                </p>
              </div>
              <div className="add_subtractbtn">
                <button onClick={() => handlechange(item, +1)}> + </button>
                <button> {item.amount} </button>
                <button onClick={() => handlechange(item, -1)}> - </button>
              </div>
              <div className="price_btn">
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}

        {/* Total Price Section */}
        {cart.length > 0 && (
          <div className="total">
            <span>Total Price of your Cart</span>
            <span>= ₹ {price}</span>
          </div>
        )}

        {/* Checkout Button */}
        <div className="checkout_btn">
          <button
            onClick={handleCheckout}
            disabled={cart.length === 0} // Disable button if cart is empty
            style={{
              backgroundColor: cart.length === 0 ? "#ccc" : "#4CAF50",
              cursor: cart.length === 0 ? "not-allowed" : "pointer",
            }}
          >
            Checkout
          </button>
        </div>
      </article>
    </div>
  );
};

export default Cart;
