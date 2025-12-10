import React from "react";
import { useNavigate } from "react-router-dom";

function SellOptions() {
  const navigate = useNavigate();

  const options = [
    { title: "📱 Phones & Tablets" },
    { title: "💻 Electronics" },
    { title: "👗 Fashion & Clothing" },
    { title: "🏠 Home & Furniture" },
    { title: "🚗 Vehicles" },
    { title: "📦 Other Products" },
  ];

  return (
    <div
      style={{
        paddingTop: "120px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FFD700, #FF8C00)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#fff" }}>
        Choose What You Want to Sell
      </h1>

      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          display: "grid",
          gap: "15px",
        }}
      >
        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() => navigate("/sell-product")}
            style={{
              padding: "18px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              fontSize: "18px",
              cursor: "pointer",
              border: "none",
              fontWeight: "bold",
            }}
          >
            {opt.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SellOptions;
