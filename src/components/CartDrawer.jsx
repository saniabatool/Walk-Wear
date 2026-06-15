import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import "./CartDrawer.css";

function CartDrawer() {
  const navigate = useNavigate();

  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`cart-overlay ${
        isCartOpen ? "show" : ""
      }`}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <h2>Your Cart</h2>

          <button
            onClick={() =>
              setIsCartOpen(false)
            }
          >
            ✕
          </button>
        </div>

        <div className="drawer-labels">
          <span>Product</span>
          <span>Total</span>
        </div>

        <div className="drawer-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div
                className="drawer-item"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="drawer-item-info">
                  <h4>{item.title}</h4>

                  <p>
                    Color:{" "}
                    {item.selectedColor}
                  </p>

                  <p>
                    Size:{" "}
                    {item.selectedSize}
                  </p>

                  <p>
                    Qty:{" "}
                    {item.quantity}
                  </p>

                  <p>
                    Rs.
                    {item.price *
                      item.quantity}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(index)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="drawer-footer">
          <h3>
            Total: Rs.{total}
          </h3>

          <button
  className={`checkout-btn ${
    cart.length === 0 ? "disabled" : ""
  }`}
  disabled={cart.length === 0}
  onClick={() => {
    if (cart.length === 0) return;

    setIsCartOpen(false);
    navigate("/checkout");
  }}
>
  {cart.length === 0
    ? "Cart Empty"
    : "Checkout"}
</button>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;