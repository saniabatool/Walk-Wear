import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Search() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(query.toLowerCase())
  );

  return (
    <div className="all-products-page">
      <h1 className="collection-title">
        Search Products
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "50px",
          padding: "0 15px",
          marginBottom: "30px",
          border: "1px solid #ddd",
        }}
      />

      <div className="all-products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </div>
  );
}

export default Search;