import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const discount =
    product.oldPrice
      ? Math.round(
          ((product.oldPrice -
            product.price) /
            product.oldPrice) *
            100
        )
      : 0;

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card"
    >
      <div className="image-wrapper">

        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        {product.tag === "sale" && (
  <span className="sale-badge">
    -
    {Math.round(
      ((product.oldPrice -
        product.price) /
        product.oldPrice) *
        100
    )}
    %
  </span>
)}

        {product.stock === 0 && (
          <span className="stock-badge">
            Out Of Stock
          </span>
        )}

      </div>

      <h3>{product.title}</h3>

      <div className="rating">
        ★★★★★ <span>(1)</span>
      </div>

      <div className="price-box">
        <span className="old-price">
          Rs.{product.oldPrice}
        </span>

        <span className="new-price">
          Rs.{product.price}
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;