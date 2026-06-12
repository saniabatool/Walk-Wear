// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import products from "../data/products";
// import "./CollectionPage.css";

// function CollectionPage() {
//   const { category } = useParams();

//   const [availability, setAvailability] =
//     useState("all");

//   const [priceFilter, setPriceFilter] =
//     useState("all");

//   const [sortBy, setSortBy] =
//     useState("featured");

//   let filteredProducts = products;

//   if (category === "sale") {
//     filteredProducts = products.filter(
//       (product) => product.tag === "sale"
//     );
//   }

//   if (category === "new-arrival") {
//     filteredProducts = products.filter(
//       (product) => product.tag === "new"
//     );
//   }

//   if (category === "best-seller") {
//     filteredProducts = products.filter(
//       (product) => product.tag === "best"
//     );
//   }

//   // Availability Filter
//   if (availability === "instock") {
//     filteredProducts = filteredProducts.filter(
//       (product) =>
//         !product.stock || product.stock > 0
//     );
//   }

//   if (availability === "outofstock") {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.stock === 0
//     );
//   }

//   // Price Filter
//   if (priceFilter === "under1500") {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price < 1500
//     );
//   }

//   if (priceFilter === "1500to3000") {
//     filteredProducts = filteredProducts.filter(
//       (product) =>
//         product.price >= 1500 &&
//         product.price <= 3000
//     );
//   }

//   if (priceFilter === "above3000") {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price > 3000
//     );
//   }

//   // Sort
//   if (sortBy === "low-high") {
//     filteredProducts.sort(
//       (a, b) => a.price - b.price
//     );
//   }

//   if (sortBy === "high-low") {
//     filteredProducts.sort(
//       (a, b) => b.price - a.price
//     );
//   }

//   if (sortBy === "newest") {
//     filteredProducts.reverse();
//   }

//   const clearFilters = () => {
//     setAvailability("all");
//     setPriceFilter("all");
//     setSortBy("featured");
//   };

//  const titles = {
//   "sale": "UPTO 30% SALE",
//   "new-arrival": "NEW ARRIVALS",
//   "best-seller": "BEST SELLERS",
//   "under1499": "UNDER 1499",
// };

//   return (
//     <div className="collection-page">

//       <h1 className="collection-title">
//         {titles[category]}
//       </h1>

//       <p className="products-count">
//         Showing {filteredProducts.length} Products
//       </p>

//       <div className="filter-bar">

//         <div className="left-filters">

//           <select
//             value={availability}
//             onChange={(e) =>
//               setAvailability(
//                 e.target.value
//               )
//             }
//           >
//             <option value="all">
//               Availability
//             </option>

//             <option value="instock">
//               In Stock
//             </option>

//             <option value="outofstock">
//               Out Of Stock
//             </option>
//           </select>

//           <select
//             value={priceFilter}
//             onChange={(e) =>
//               setPriceFilter(
//                 e.target.value
//               )
//             }
//           >
//             <option value="all">
//               Price
//             </option>

//             <option value="under1500">
//               Under Rs.1500
//             </option>

//             <option value="1500to3000">
//               Rs.1500 - Rs.3000
//             </option>

//             <option value="above3000">
//               Above Rs.3000
//             </option>
//           </select>

//           <button
//             className="clear-btn"
//             onClick={clearFilters}
//           >
//             Clear Filters
//           </button>

//         </div>

//         <div className="sort-filter">

//           <select
//             value={sortBy}
//             onChange={(e) =>
//               setSortBy(
//                 e.target.value
//               )
//             }
//           >
//             <option value="featured">
//               Featured
//             </option>

//             <option value="low-high">
//               Price: Low to High
//             </option>

//             <option value="high-low">
//               Price: High to Low
//             </option>

//             <option value="newest">
//               Newest
//             </option>
//           </select>

//         </div>

//       </div>

//       <div className="collection-grid">
//         {filteredProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//           />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default CollectionPage;


import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./CollectionPage.css";

function CollectionPage() {
  const { category } = useParams();

  const [availability, setAvailability] =
    useState("all");

  const [priceFilter, setPriceFilter] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("featured");

  let filteredProducts = products;

  /* CATEGORY FILTERS */

  if (category === "sale") {
    filteredProducts = products.filter(
      (product) => product.tag === "sale"
    );
  }

  if (category === "new-arrival") {
    filteredProducts = products.filter(
      (product) => product.tag === "new"
    );
  }

  if (category === "best-seller") {
    filteredProducts = products.filter(
      (product) => product.tag === "best"
    );
  }

  if (category === "under1499") {
    filteredProducts = products.filter(
      (product) => product.price <= 1499
    );
  }

  /* AVAILABILITY FILTER */

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

  /* PRICE FILTER */

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

  /* SORTING */

  if (sortBy === "low-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "high-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortBy === "newest") {
    filteredProducts = [...filteredProducts].reverse();
  }

  const clearFilters = () => {
    setAvailability("all");
    setPriceFilter("all");
    setSortBy("featured");
  };

  const titles = {
    sale: "UPTO 30% SALE",
    "new-arrival": "NEW ARRIVALS",
    "best-seller": "BEST SELLERS",
    under1499: "UNDER 1499",
  };

  return (
    <div className="collection-page">

      <h1 className="collection-title">
        {titles[category]}
      </h1>

      <p className="products-count">
        Showing {filteredProducts.length} Products
      </p>

      <div className="filter-bar">

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

      <div className="collection-grid">
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

export default CollectionPage;