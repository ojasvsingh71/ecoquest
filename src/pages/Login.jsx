import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication logic
    // if (email === "user@ecoquest.com" && password === "ojasv") {
    //   setIsAuthenticated(true);
    //   navigate("/home");
    // } else {
    //   alert("Invalid credentials. Please try again.");
    // }
    setIsAuthenticated(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(135deg, #E0F7E9, #CFFFE3)",
        color: "#2F855A",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ marginBottom: "1rem", color: "#2F855A" }}>Login to EcoQuest</h2>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ddd",
              borderRadius: "6px",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ddd",
              borderRadius: "6px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.8rem",
            background: "linear-gradient(90deg, #4CAF50, #2F855A)",
            border: "none",
            borderRadius: "6px",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
