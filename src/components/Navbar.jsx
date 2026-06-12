import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import {
  FiSearch,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";

import "./Navbar.css";

function Navbar() {
  const {
    cart,
    setIsCartOpen,
  } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <header className="navbar">

      {/* TOP BAR */}
      <div className="navbar-top">

        <div
  className="nav-left"
  onClick={() => navigate("/search")}
  style={{ cursor: "pointer" }}
>
  <FiSearch />
</div>

        <div className="nav-logo">
          <Link to="/">
            <img
              src="/images/logo.jpg"
              alt="logo"
            />
          </Link>
        </div>

        <div className="nav-right">

          <FiUser />

          <button
            className="cart-btn-nav"
            onClick={() =>
              setIsCartOpen(true)
            }
          >
            <FiShoppingBag />

            {cart.length > 0 && (
              <span className="cart-badge">
                {cart.length}
              </span>
            )}
          </button>

        </div>

      </div>

      {/* MENU */}
      <nav className="navbar-menu">

  <Link to="/collections/new-arrival">
    NEW ARRIVAL
  </Link>

  <Link to="/collections/best-seller">
    BEST SELLER
  </Link>

  <Link to="/collections/all">
    SHOP ALL
  </Link>

  <Link to="/collections/under1499">
    UNDER 1499
  </Link>

  <Link to="/contact">
    CONTACT
  </Link>

</nav>

    </header>
  );
}

export default Navbar;