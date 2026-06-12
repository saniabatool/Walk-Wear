import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./AllProducts.css";

function AllProducts() {
  const [availability, setAvailability] =
    useState("all");

  const [priceFilter, setPriceFilter] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("featured");

  let filteredProducts = [...products];

  // Availability Filter
  if (availability === "instock") {
    filteredProducts = filteredProducts.filter(
      (product) =>
        !product.stock || product.stock > 0
    );
  }

  if (availability === "outofstock") {
    filteredProducts = filteredProducts.filter(
      (product) => product.stock === 0
    );
  }

  // Price Filter
  if (priceFilter === "under1500") {
    filteredProducts = filteredProducts.filter(
      (product) => product.price < 1500
    );
  }

  if (priceFilter === "1500to3000") {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= 1500 &&
        product.price <= 3000
    );
  }

  if (priceFilter === "above3000") {
    filteredProducts = filteredProducts.filter(
      (product) => product.price > 3000
    );
  }

  // Sorting
  if (sortBy === "low-high") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "high-low") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortBy === "newest") {
    filteredProducts.reverse();
  }

  const clearFilters = () => {
    setAvailability("all");
    setPriceFilter("all");
    setSortBy("featured");
  };

  return (
    <div className="all-products-page">

      <h1 className="collection-title">
        SHOP ALL
      </h1>

      <p className="products-count">
        Showing {filteredProducts.length} Products
      </p>

      <div className="filters-bar">

        <div className="left-filters">

          <select
            value={availability}
            onChange={(e) =>
              setAvailability(
                e.target.value
              )
            }
          >
            <option value="all">
              Availability
            </option>

            <option value="instock">
              In Stock
            </option>

            <option value="outofstock">
              Out Of Stock
            </option>
          </select>

          <select
            value={priceFilter}
            onChange={(e) =>
              setPriceFilter(
                e.target.value
              )
            }
          >
            <option value="all">
              Price
            </option>

            <option value="under1500">
              Under Rs.1500
            </option>

            <option value="1500to3000">
              Rs.1500 - Rs.3000
            </option>

            <option value="above3000">
              Above Rs.3000
            </option>
          </select>

          <button
            className="clear-btn"
            onClick={clearFilters}
          >
            Clear Filters
          </button>

        </div>

        <div className="sort-filter">

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value
              )
            }
          >
            <option value="featured">
              Featured
            </option>

            <option value="low-high">
              Price: Low to High
            </option>

            <option value="high-low">
              Price: High to Low
            </option>

            <option value="newest">
              Newest
            </option>
          </select>

        </div>

      </div>

      <div className="all-products-grid">
        {filteredProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}
      </div>

    </div>
  );
}

export default AllProducts;

