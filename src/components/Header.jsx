import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "15px 40px",
        backgroundColor: "#1a1a1a",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <h1 style={{ color: "#FFD700", fontStyle: "italic", fontSize: "30px", margin: 0, fontWeight: "bold" }}>
        KILIKUU
      </h1>

      {/* SEARCH BAR */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50%" }}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value); // live update
            navigate("/"); // always go to homepage
          }}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "15px",
            borderRadius: "8px 0 0 8px",
            border: "none",
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px", marginRight: "50px" }}>
        <button
          onClick={() => navigate("/sell")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FFD700",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Sell on Kilikuu
        </button>

        <button
          onClick={() => navigate("/create-account")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FFD700",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/cart")}
          style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: "22px", color: "white" }}
        >
          <FaShoppingCart />
        </button>
      </div>
    </header>
  );
}

export default Header;
