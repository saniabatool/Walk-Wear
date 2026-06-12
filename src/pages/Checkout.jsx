import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import "./Checkout.css";

function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* CHECKOUT HEADER */}
      <div className="checkout-navbar">
        <Link to="/">
          <img
            src="/images/logo.jpg"
            alt="SHOE"
            className="checkout-nav-logo"
          />
        </Link>

        <button className="checkout-cart-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M6 7H18L17 20H7L6 7Z" />
            <path d="M9 7V5C9 3.3 10.3 2 12 2C13.7 2 15 3.3 15 5V7" />
          </svg>
        </button>
      </div>

      <div className="checkout-page">

        {/* LEFT SIDE */}
        <div className="checkout-left">

          <h2>Contact</h2>

          <input
            type="text"
            placeholder="Email or mobile number"
          />

          <label className="checkbox-row">
            <input type="checkbox" />
            Email me with news and offers
          </label>

          <h2>Delivery</h2>

          <select>
            <option>Pakistan</option>
          </select>

          <div className="row">
            <input
              type="text"
              placeholder="First name"
            />

            <input
              type="text"
              placeholder="Last name"
            />
          </div>

          <input
            type="text"
            placeholder="Address"
          />

          <input
            type="text"
            placeholder="Apartment, suite, etc."
          />

          <div className="row">
            <input
              type="text"
              placeholder="City"
            />

            <input
              type="text"
              placeholder="Postal code"
            />
          </div>

          <input
            type="text"
            placeholder="Phone"
          />

          <label className="checkbox-row">
            <input type="checkbox" />
            Save this information
          </label>

          <h2>Shipping Method</h2>

          <div className="shipping-box">
            <span>Free Shipping</span>
            <strong>FREE</strong>
          </div>

          <h2>Payment</h2>

          <div className="payment-box">
            Cash On Delivery (COD)
          </div>

          <button className="complete-order">
            Complete Order
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-right">

          {cart.map((item, index) => (
            <div
              key={index}
              className="checkout-item"
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="checkout-info">
                <h4>{item.title}</h4>

                <p>
                  {item.selectedColor} / {item.selectedSize}
                </p>

                <p>
                  Qty: {item.quantity}
                </p>
              </div>

              <strong>
                Rs.{item.price * item.quantity}
              </strong>
            </div>
          ))}

          <div className="discount-box">
            <input
              type="text"
              placeholder="Discount code"
            />

            <button>
              Apply
            </button>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>Rs.{total}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <div className="checkout-total">
            <span>Total</span>

            <strong>
              Rs.{total}
            </strong>
          </div>

        </div>

      </div>
    </>
  );
}

export default Checkout;