import emailjs from "@emailjs/browser";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const { cart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
      if (
  !formData.email ||
  !formData.firstName ||
  !formData.lastName ||
  !formData.address ||
  !formData.city ||
  !formData.phone
)
     {
      alert("Please fill all required fields.");
      return;
    }

    const orderItems = cart
      .map(
        (item) =>
          `${item.title} (${item.selectedColor}/${item.selectedSize}) x ${item.quantity}`
      )
      .join("\n");

    const customerName = `${formData.firstName} ${formData.lastName}`;

    try {
  // Email to Business Owner
  // Email to Business Owner
// Email to Business Owner
const ownerEmail = await emailjs.send(
  "service_hazc51a",
  "template_41k5b5m",
  {
    customer_name: customerName,
    customer_email: formData.email,
    customer_phone: formData.phone,
    customer_address: `${formData.address}, ${formData.city}, ${formData.postalCode}`,
    order_items: orderItems,
    total: total,
  },
  "9XlnUiVJfpmN832sU"
);

console.log("Owner email sent:", ownerEmail);

// Customer Confirmation Email
const customerEmail = await emailjs.send(
  "service_hazc51a",
  "template_jyc8yko",
  {
    customer_name: customerName,
    customer_email: formData.email,
    order_items: orderItems,
    total: total,
  },
  "9XlnUiVJfpmN832sU"
);

console.log("Customer email sent:", customerEmail);
  alert(
    "Thank you! Your order has been placed successfully. A confirmation email has been sent to you."
  );

} catch (error) {
  console.error(error);
  alert("Failed to place order.");
}
  }
  return (
    <>
     <div className="checkout-navbar">
  <Link to="/" className="checkout-nav-logo">
    WALK & WEAR
  </Link>
</div>

     {/* <div>
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
      </div> */}

      <div className="checkout-page">
        <div className="checkout-left">
          <h2>Contact</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
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
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Apartment, suite, etc."
          />

          <div className="row">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <input
              type="text"
              name="postalCode"
              placeholder="Postal code"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
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

          <button
            className="complete-order"
            onClick={handleOrder}
          >
            Complete Order
          </button>
        </div>

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

                <p>Qty: {item.quantity}</p>
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
            <button>Apply</button>
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
            <strong>Rs.{total}</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;