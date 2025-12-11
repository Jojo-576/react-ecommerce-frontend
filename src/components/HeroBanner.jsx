import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="hero-banner">
      <h1 className="hero-title">DONKOMI SALES</h1>
      <p className="glitch-text">50% Off AKTIVE</p>
      <p className="call-now">CALL NOW: 0595948875</p>
      <button
        className="shop-button"
        onClick={() =>
          alert("NYA ABOTER3 BORGA WILL COME SOON!")
        }
      >
        SHOP HERE
      </button>
    </div>
  );
}

export default HeroBanner;
