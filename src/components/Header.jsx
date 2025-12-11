import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="header-title">KILIKUU</h1>

      <div className="header-middle">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            navigate("/");
          }}
          className="header-search"
        />
      </div>

      <div className="header-buttons">
        <button onClick={() => navigate("/sell")} className="header-btn">
          Sell on Kilikuu
        </button>

        <button onClick={() => navigate("/create-account")} className="header-btn">
          Create Account
        </button>

        <button onClick={() => navigate("/cart")} className="cart-btn">
          <FaShoppingCart />
        </button>
      </div>
    </header>
  );
}

export default Header;
