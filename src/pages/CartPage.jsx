import React, { useContext } from "react";
import { CartContext } from "../context/MyCartContext";

const CartPage = () => {
  const { cart, removeItem, increaseQty, decreaseQty } = useContext(CartContext);
  const SHIPPING_COST = 200;

  const grandTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0) + (cart.length ? SHIPPING_COST : 0);

  return (
    <div style={{ padding: "20px", flex: 1, minHeight: "80vh" }}>
      <h2 style={{ fontSize: "30px", marginBottom: "20px", fontWeight: "bold" }}>
        🛒 Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "90px", height: "90px", objectFit: "contain", borderRadius: "8px" }}
              />
              <div style={{ flex: 1, textAlign: "left" }}>
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>{item.name}</h3>
                <p style={{ margin: "5px 0", color: "#FF8C00", fontWeight: "bold" }}>
                  Price: GH₵ {item.price}
                </p>
                <p style={{ margin: "5px 0" }}>Shipping: GH₵ {SHIPPING_COST}</p>
                <p style={{ marginTop: "10px", fontWeight: "bold", fontSize: "16px" }}>
                  Total: GH₵ {item.price * item.qty + SHIPPING_COST}
                </p>

                <div style={{ display: "flex", alignItems: "center", marginTop: "10px", gap: "10px" }}>
                  <button onClick={() => decreaseQty(item.id)} style={{ width: "30px", height: "30px", background: "#ddd", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "18px" }}>-</button>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)} style={{ width: "30px", height: "30px", background: "#FFD700", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "18px" }}>+</button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    marginTop: "10px",
                    background: "#ff3333",
                    color: "#fff",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
            Grand Total (including shipping): GH₵ {grandTotal}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
