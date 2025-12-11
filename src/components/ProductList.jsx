import React, { useContext } from "react";
import products from "../data/products";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/MyCartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = ({ searchTerm }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (product) => {
    addToCart(product);
    toast.success("✅ Added to cart!", { position: "top-right", autoClose: 1500, hideProgressBar: true, theme: "dark" });
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ToastContainer />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "15px", width: "100%" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "10px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "120px", objectFit: "contain", borderRadius: "8px", marginBottom: "8px" }}
            />
            <h3 style={{ fontSize: "14px", margin: "5px 0", fontWeight: "bold" }}>{product.name}</h3>
            <p style={{ color: "#FF8C00", fontWeight: "bold" }}>GH₵ {product.price}</p>

            <button
              onClick={() => handleAdd(product)}
              style={{
                marginTop: "5px",
                padding: "8px 10px",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                fontWeight: "bold",
              }}
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
