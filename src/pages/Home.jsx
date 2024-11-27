import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRecycle,
  FaSolarPanel,
  FaLeaf,
  FaGlobe,
  FaUsers,
  FaAward,
  FaHandsHelping,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [electricity, setElectricity] = useState("");
  const [travel, setTravel] = useState("");
  const [waste, setWaste] = useState("");
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 16px 32px rgba(0, 0, 0, 0.2)",
    },
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  // Dummy data for the tracker chart
  const chartData = [
    { month: "Jan", co2: 50 },
    { month: "Feb", co2: 70 },
    { month: "Mar", co2: 90 },
    { month: "Apr", co2: 150 },
    { month: "May", co2: 180 },
  ];

  const handleCalculate = (e) => {
    e.preventDefault();
    const calculatedFootprint =
      parseFloat(electricity || 0) * 0.5 +
      parseFloat(travel || 0) * 0.25 +
      parseFloat(waste || 0) * 0.1;

    setCarbonFootprint(calculatedFootprint.toFixed(2));
  };

  const handleStartQuest = () => {
    navigate("/quests");
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          backgroundImage: "linear-gradient(135deg, #E0F7E9, #CFFFE3)",
          textAlign: "center",
          color: "#2F855A",
          padding: "2rem",
        }}
      >
        <motion.h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Welcome to EcoQuest
        </motion.h1>
        <motion.p
          style={{ fontSize: "1.5rem", margin: "1rem 0" }}
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Join us in building a sustainable future. Earn rewards and track your
          progress!
        </motion.p>
        <motion.button
          style={{
            marginTop: "1.5rem",
            padding: "0.8rem 1.5rem",
            border: "none",
            borderRadius: "6px",
            background: "linear-gradient(90deg, #4CAF50, #2F855A)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
          variants={buttonVariants}
          whileHover="hover"
          onClick={handleStartQuest}
        >
          Start Your Quest
        </motion.button>
      </motion.section>

      {/* Carbon Footprint Tracker Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#F3F4F6",
          textAlign: "center",
        }}
      >
        <motion.h2
          style={{
            fontSize: "2.5rem",
            color: "#2F855A",
            marginBottom: "1rem",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Your Carbon Footprint Tracker
        </motion.h2>
        <p style={{ color: "#555", marginBottom: "2rem" }}>
          See your progress in reducing CO₂ emissions through your quests.
        </p>

        {/* Line Chart */}
        <ResponsiveContainer width="80%" height={300}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="co2" stroke="#4CAF50" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Carbon Footprint Calculator Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <motion.h2
          style={{
            fontSize: "2.5rem",
            color: "#2F855A",
            marginBottom: "1rem",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Carbon Footprint Calculator
        </motion.h2>
        <p style={{ marginBottom: "2rem", color: "#555" }}>
          Estimate your carbon footprint based on your daily habits.
        </p>
        <form
          onSubmit={handleCalculate}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              Electricity Usage (kWh/month):
            </label>
            <input
              type="number"
              value={electricity}
              onChange={(e) => setElectricity(e.target.value)}
              style={{
                padding: "0.8rem",
                borderRadius: "6px",
                border: "1px solid #ddd",
                width: "300px",
              }}
            />
          </div>
          <div style={{ textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              Travel (miles/month):
            </label>
            <input
              type="number"
              value={travel}
              onChange={(e) => setTravel(e.target.value)}
              style={{
                padding: "0.8rem",
                borderRadius: "6px",
                border: "1px solid #ddd",
                width: "300px",
              }}
            />
          </div>
          <div style={{ textAlign: "left" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              Waste Produced (kg/month):
            </label>
            <input
              type="number"
              value={waste}
              onChange={(e) => setWaste(e.target.value)}
              style={{
                padding: "0.8rem",
                borderRadius: "6px",
                border: "1px solid #ddd",
                width: "300px",
              }}
            />
          </div>
          <motion.button
            type="submit"
            style={{
              padding: "0.8rem 1.5rem",
              border: "none",
              borderRadius: "6px",
              background: "linear-gradient(90deg, #4CAF50, #2F855A)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
          >
            Calculate
          </motion.button>
        </form>
        {carbonFootprint !== null && (
          <div
            style={{
              marginTop: "2rem",
              padding: "1rem 2rem",
              border: "1px solid #ddd",
              borderRadius: "6px",
              backgroundColor: "#fff",
              display: "inline-block",
            }}
          >
            <h3 style={{ color: "#2F855A", marginBottom: "0.5rem" }}>
              Your Estimated Carbon Footprint:
            </h3>
            <p style={{ fontSize: "1.5rem", color: "#555" }}>
              {carbonFootprint} kg CO₂/month
            </p>
          </div>
        )}
      </section>

      {/* Achievements Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <motion.h2
          style={{
            fontSize: "2.5rem",
            color: "#2F855A",
            marginBottom: "1rem",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Sustainable Achievements
        </motion.h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {[
            {
              icon: <FaRecycle style={{ fontSize: "3rem", color: "#4CAF50" }} />,
              title: "10 Tons of Waste Recycled",
            },
            {
              icon: <FaSolarPanel style={{ fontSize: "3rem", color: "#F7B801" }} />,
              title: "50 kWh Solar Energy Generated",
            },
            {
              icon: <FaLeaf style={{ fontSize: "3rem", color: "#68D391" }} />,
              title: "500 Trees Planted",
            },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              style={{
                padding: "2rem",
                borderRadius: "12px",
                backgroundColor: "#F9FAFB",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
              whileHover="hover"
              variants={cardVariants}
            >
              {achievement.icon}
              <h3 style={{ fontSize: "1.5rem", color: "#2F855A" }}>
                {achievement.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
