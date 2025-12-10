import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAccount";
import ProductList from "./components/ProductList";

import SellOnKilikuu from "./pages/SellOnKilikuu";
import SellOptions from "./pages/SellOptions";
import SellProduct from "./pages/SellProduct";

import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/MyCartContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
      <Router>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", paddingTop: "80px" }}>
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroBanner />
                  <main style={{ width: "100%", maxWidth: "1200px", padding: "20px", textAlign: "center", flex: 1 }}>
                    <h2 style={{ marginTop: "20px", fontSize: "36px", fontWeight: "bold" }}>
                      Welcome to <span style={{ color: "#FFD700" }}>KILIKUU</span>
                    </h2>
                    <p style={{ fontSize: "18px", marginTop: "10px", color: "#333" }}>
                      Discover amazing products at unbeatable prices.
                    </p>
                    <div
                      style={{
                        width: "90%",
                        margin: "40px auto",
                        padding: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <ProductList searchTerm={searchTerm} />
                    </div>
                  </main>
                </>
              }
            />

            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/sell" element={<SellOnKilikuu />} />
            <Route path="/sell-options" element={<SellOptions />} />
            <Route path="/sell-product" element={<SellProduct />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
