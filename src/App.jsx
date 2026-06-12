import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";
import CollectionPage from "./pages/CollectionPage";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Search from "./pages/Search";
import SearchPage from "./pages/SearchPage";

function App() {
  const location = useLocation();

  const isCheckout =
    location.pathname === "/checkout";

  return (
    <div className="app">

      {/* Hide Navbar on Checkout */}
      {!isCheckout && <Navbar />}

      {/* Hide Cart Drawer on Checkout */}
      {!isCheckout && <CartDrawer />}

      <div className="content">
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          

          <Route
            path="/collections/all"
            element={<AllProducts />}
          />

          <Route
            path="/collections/:category"
            element={<CollectionPage />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
  path="/search"
  element={<Search />}
/>
<Route
  path="/search"
  element={<SearchPage />}
/>

        </Routes>
      </div>

      {/* Hide Footer on Checkout */}
      {!isCheckout && <Footer />}

    </div>
  );
}

export default App;