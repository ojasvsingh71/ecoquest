import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header({ setIsAuthenticated }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const navLinkStyle = (path) => ({
    color: location.pathname === path ? "#4CAF50" : "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    transition: "color 0.3s",
  });

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#2F855A",
        color: "white",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", margin: "0" }}>EcoQuest</h1>

      {/* Desktop Navigation */}
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
        className="nav-desktop"
      >
        <Link to="/" style={navLinkStyle("/")}>
          Home
        </Link>
        <Link to="/quests" style={navLinkStyle("/quests")}>
          Quests
        </Link>
        <Link to="/dashboard" style={navLinkStyle("/dashboard")}>
          Dashboard
        </Link>
        <Link to="/community" style={navLinkStyle("/community")}>
          Community
        </Link>
        <Link to="/local-map" style={navLinkStyle("/local-map")}>
          Local Map
        </Link>
        <Link to="/green-energy" style={navLinkStyle("/green-energy")}>
          Green Energy
        </Link>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#E53E3E",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#FF6B6B")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#E53E3E")}
        >
          Logout
        </button>
      </nav>

      {/* Mobile Menu Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ cursor: "pointer", fontSize: "1.5rem", display: "none" }}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "#2F855A",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem 0",
          }}
          className="nav-mobile"
        >
          <Link to="/" style={navLinkStyle("/")} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/quests"
            style={navLinkStyle("/quests")}
            onClick={() => setMenuOpen(false)}
          >
            Quests
          </Link>
          <Link
            to="/dashboard"
            style={navLinkStyle("/dashboard")}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/community"
            style={navLinkStyle("/community")}
            onClick={() => setMenuOpen(false)}
          >
            Community
          </Link>
          <Link
            to="/local-map"
            style={navLinkStyle("/local-map")}
            onClick={() => setMenuOpen(false)}
          >
            Local Map
          </Link>
          <Link
            to="/green-energy"
            style={navLinkStyle("/green-energy")}
            onClick={() => setMenuOpen(false)}
          >
            Green Energy
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            style={{
              backgroundColor: "#E53E3E",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Logout
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
