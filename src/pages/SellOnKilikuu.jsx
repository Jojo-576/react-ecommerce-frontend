import React from "react";
import { useNavigate } from "react-router-dom";

function SellOnKilikuu() {
  const navigate = useNavigate(); // ⭐ enables navigation

  return (
    <div
      style={{
        paddingTop: "120px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FFD700, #FF8C00)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "40px",
          borderRadius: "15px",
          width: "90%",
          maxWidth: "600px",
          textAlign: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333", fontSize: "32px" }}>
          Sell on <span style={{ color: "#FFD700" }}>KILIKUU</span>
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444" }}>
          Join thousands of sellers earning daily on KILIKUU.
          Easily upload your products, reach more customers, 
          and grow your business with our fast and secure marketplace.
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            backgroundColor: "#FFD700",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => navigate("/sell-options")} // ⭐ NEW NAVIGATION
        >
          Start Selling
        </button>
      </div>
    </div>
  );
}

export default SellOnKilikuu;
