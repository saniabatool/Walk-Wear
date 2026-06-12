import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";;

import products from "../data/products";
import { CartContext } from "../context/CartContext";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    cart,
    setCart,
    setIsCartOpen,
  } = useContext(CartContext);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const [selectedImage, setSelectedImage] = useState(
    product.gallery?.[0] || product.image
  );

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || ""
  );

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || ""
  );

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const existingItem = cart.find(
      (item) =>
        item.id === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
          ? {
              ...item,
              quantity:
                item.quantity + quantity,
            }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          selectedColor,
          selectedSize,
          quantity,
        },
      ]);
    }

    setIsCartOpen(true);
  };

  const buyNow = () => {
    const existingItem = cart.find(
      (item) =>
        item.id === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
          ? {
              ...item,
              quantity:
                item.quantity + quantity,
            }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          selectedColor,
          selectedSize,
          quantity,
        },
      ]);
    }

    navigate("/checkout");
  };

  return (
    <div className="product-page">
      <div className="product-gallery">
        <div className="thumbnails">
          {(product.gallery || [product.image]).map(
            (img, index) => (
              <img
                key={index}
                src={img}
                alt={product.title}
                className={
                  selectedImage === img
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() =>
                  setSelectedImage(img)
                }
              />
            )
          )}
        </div>

        <div className="main-image">
          <img
            src={selectedImage}
            alt={product.title}
          />
        </div>
      </div>

      <div className="product-info">
        <h1>{product.title}</h1>

        <div className="price-row">
          <span className="old-price">
            Rs.{product.oldPrice}
          </span>

          <span className="current-price">
            Rs.{product.price}
          </span>

          <span className="sale-badge">
            Sale
          </span>
        </div>

        <h4>Color</h4>

        <div className="options">
          {product.colors?.map((color) => (
            <button
              key={color}
              className={
                selectedColor === color
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedColor(color)
              }
            >
              {color}
            </button>
          ))}
        </div>

        <h4>Size</h4>

        <div className="options">
          {product.sizes?.map((size) => (
            <button
              key={size}
              className={
                selectedSize === size
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedSize(size)
              }
            >
              {size}
            </button>
          ))}
        </div>

        <h4>Quantity</h4>

        <div className="quantity-box">
          <button
            onClick={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >
            +
          </button>
        </div>

        <button
          className="cart-btn"
          onClick={addToCart}
        >
          Add To Cart
        </button>

        <button
          className="buy-btn"
          onClick={buyNow}
        >
          Buy It Now
        </button>

        <div className="description">
          <h3>Description</h3>

          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;