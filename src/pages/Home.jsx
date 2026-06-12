import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CustomerReviews from "../components/CustomerReviews";
import { Link } from "react-router-dom";

import products from "../data/products";

import "./Home.css";

function Home() {
  const saleProducts = products.filter(
    (product) => product.tag === "sale"
  );

  const newArrivals = products.filter(
    (product) => product.tag === "new"
  );

  const bestSellers = products.filter(
    (product) => product.tag === "best"
  );

  return (
    <>
      <Hero />

      <div className="home">

        {/* SALE SECTION */}
        <section className="product-section">
          <h2 className="section-title">
            UPTO 30% SALE
          </h2>

          <div className="products-container">
            {saleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="view-all-container">
<Link to="/collections/sale">
  <button className="view-all-btn">View All</button>
</Link>
          </div>
        </section>

        {/* NEW ARRIVALS */}
        <section className="product-section">
          <h2 className="section-title">
            NEW ARRIVALS
          </h2>

          <div className="products-container">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="view-all-container">
            <Link to="/collections/new-arrival">
  <button className="view-all-btn">
    View All
  </button>
</Link>
          </div>
        </section>

        {/* BEST SELLERS */}
        <section className="product-section">
          <h2 className="section-title">
            BEST SELLERS
          </h2>

          <div className="products-container">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="view-all-container">
           <Link to="/collections/best-seller">
  <button className="view-all-btn">View All</button>
</Link>
          </div>
        </section>

      </div>

  

      {/* CUSTOMER REVIEWS */}
      <CustomerReviews />
    </>
  );
}

export default Home;