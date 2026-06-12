import "./AllProducts.css";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <h1>Search</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        style={{
          width: "100%",
          height: "50px",
          padding: "0 15px",
          margin: "20px 0 40px",
          border: "1px solid #ddd",
        }}
      />

      <div className="all-products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;