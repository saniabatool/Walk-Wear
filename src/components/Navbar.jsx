import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Navbar.css";

function Navbar() {
  const { cart, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Announcement Bar */}
      <div className="announcement-bar">
        FREE SHIPPING ALL OVER PAKISTAN
      </div>

      {/* Header */}
      <div className="navbar-top">

        {/* Left */}
        <div className="nav-left">

          {/* Desktop Search */}
          <FiSearch
            className="desktop-search"
            onClick={() => navigate("/search")}
          />

          {/* Mobile Menu */}
          <FiMenu
            className="mobile-menu-icon"
            onClick={() => setMenuOpen(true)}
          />

        </div>

        {/* Center Logo */}
        <div className="nav-logo">
          <Link to="/">
            WALK & WEAR
          </Link>
        </div>

        {/* Right */}
        <div className="nav-right">

          <button
            className="cart-btn-nav"
            onClick={() => setIsCartOpen(true)}
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

      {/* Desktop Menu */}
      <nav className="navbar-menu">

        <Link to="/collections/new-arrival">
          NEW ARRIVALS
        </Link>

        <Link to="/collections/best-seller">
          BEST SELLERS
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

      {/* Overlay */}
      <div
        className={`mobile-overlay ${
          menuOpen ? "show" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >

        <button
          className="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>

        <Link
          to="/collections/new-arrival"
          onClick={() => setMenuOpen(false)}
        >
          NEW ARRIVALS
        </Link>

        <Link
          to="/collections/best-seller"
          onClick={() => setMenuOpen(false)}
        >
          BEST SELLERS
        </Link>

        <Link
          to="/collections/all"
          onClick={() => setMenuOpen(false)}
        >
          SHOP ALL
        </Link>

        <Link
          to="/collections/under1499"
          onClick={() => setMenuOpen(false)}
        >
          UNDER 1499
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          CONTACT
        </Link>

      </div>

    </header>
  );
}

export default Navbar;
