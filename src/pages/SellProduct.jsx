import React, { useState } from "react";
import { motion } from "framer-motion";

function SellProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !image) {
      setSuccess("");
      setError("Please fill all parts of the form before submitting!");
      return;
    }

    setError("");
    setSuccess("🎉 Congratulations! Your product has been submitted!");
  };

  return (
    <div
      style={{
        paddingTop: "120px",
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "90%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>
          Upload Your Product
        </h1>

        <p style={{ color: "#666", marginBottom: "20px" }}>
          Fill in the details below to publish your product on KILIKUU.
        </p>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "#ffdddd",
              color: "#c30000",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ffb3b3",
              fontWeight: "bold",
            }}
          >
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "#ddffdd",
              color: "#008000",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #9cff9c",
              fontWeight: "bold",
            }}
          >
            {success}
          </motion.div>
        )}

        <label>Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <label>Price</label>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <label>Upload Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "20px",
            border: "1px solid #ccc",
          }}
        />

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#FFD700",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit Product
        </motion.button>
      </motion.div>

      {/* FLOATING BOUNCING ANIMATION */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -20 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "55px",
          height: "55px",
          background: "linear-gradient(45deg, #FFD700, #FFA500)",
          borderRadius: "50%",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}

export default SellProduct;
