import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
} from "react-icons/fi";

import "./Navbar.css";

function Navbar() {
  const {
    cart,
    setIsCartOpen,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className="navbar">

      {/* TOP BAR */}
      <div className="navbar-top">

        {/* LEFT */}
        <div
          className="nav-left"
          onClick={() =>
            setMenuOpen(true)
          }
        >
          <FiMenu />
        </div>

        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/">
            <img
              src="/images/logo.jpg"
              alt="logo"
            />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">

          <FiSearch
            onClick={() =>
              navigate("/search")
            }
          />

      

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

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="mobile-menu">

          <button
            className="close-menu"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            ✕
          </button>

          <Link
            to="/collections/new-arrival"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            NEW ARRIVAL
          </Link>

          <Link
            to="/collections/best-seller"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            BEST SELLER
          </Link>

          <Link
            to="/collections/all"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            SHOP ALL
          </Link>

          <Link
            to="/collections/under1499"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            UNDER 1499
          </Link>

          <Link
            to="/contact"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            CONTACT
          </Link>

        </div>
      )}

      {/* DESKTOP MENU */}
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