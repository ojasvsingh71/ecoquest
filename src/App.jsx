import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Quests from "./pages/Quests";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import LocalMap from "./pages/LocalMap";
import GreenEnergy from "./pages/GreenEnergy";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated && <Header setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        {isAuthenticated && (
          <>
            <Route path="/quests" element={<Quests />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/community" element={<Community />} />
            <Route path="/local-map" element={<LocalMap />} />
            <Route path="/green-energy" element={<GreenEnergy />} />
          </>
        )}
      </Routes>
      {isAuthenticated && <Footer />}
    </>
  );
}

export default App;
