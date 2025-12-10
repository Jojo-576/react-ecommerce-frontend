import React, { useState } from "react";

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    mobile: "",
    password: "",
  });

  const [showLogin, setShowLogin] = useState(false); 
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Account created successfully! (Temporary front-end)");
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    alert("Login attempt! (Temporary front-end)");
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        padding: "20px",
        minHeight: "calc(100vh - 160px)", // keeps content box tall enough for footer
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {showLogin ? "Member Login" : "Create Your KILIKUU Account"}
      </h2>

      {/* Container for sliding effect */}
      <div style={{ transition: "all 0.4s ease-in-out" }}>
        {!showLogin && (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
            <input type="text" name="location" placeholder="Location / Address" value={formData.location} onChange={handleChange} required style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
            <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />

            <button type="submit" style={{ padding: "12px", background: "#FFD700", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>Create Account</button>
          </form>
        )}

        {showLogin && (
          <form
            onSubmit={handleLoginSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <input type="email" name="email" placeholder="Email Address" value={loginData.email} onChange={handleLoginChange} required style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
            <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
            <button type="submit" style={{ padding: "12px", background: "#FFD700", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>Login</button>
          </form>
        )}
      </div>

      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <button
          onClick={() => setShowLogin(!showLogin)}
          style={{ background: "transparent", border: "none", color: "#007BFF", cursor: "pointer", fontWeight: "bold" }}
        >
          {showLogin ? "Don't have an account? Create One" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
