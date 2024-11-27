import React, { useState, useEffect } from "react";
import QuestCard from "../components/QuestCard";

function Quests() {
  const [filter, setFilter] = useState("All");
  const [completedQuests, setCompletedQuests] = useState(() => {
    // Retrieve completed quests from localStorage
    const savedCompletedQuests = localStorage.getItem("completedQuests");
    return savedCompletedQuests ? JSON.parse(savedCompletedQuests) : [];
  });

  const allQuests = [
    { id: 1, category: "Energy Efficiency", title: "Switch to LED Bulbs", points: 10 },
    { id: 2, category: "Waste Reduction", title: "Start Composting", points: 15 },
    { id: 3, category: "Green Transportation", title: "Carpool Once a Week", points: 20 },
    { id: 4, category: "Eco-Friendly Living", title: "Plant a Tree", points: 30 },
    { id: 5, category: "Energy Efficiency", title: "Unplug Idle Devices", points: 10 },
    { id: 6, category: "Waste Reduction", title: "Zero-Waste Grocery Shopping", points: 25 },
    { id: 7, category: "Green Transportation", title: "Bike to Work", points: 20 },
    { id: 8, category: "Energy Efficiency", title: "Install Solar Panels", points: 50 },
    { id: 9, category: "Waste Reduction", title: "Recycle Electronics", points: 15 },
    { id: 10, category: "Green Transportation", title: "Walk for Short Distances", points: 10 },
    { id: 11, category: "Eco-Friendly Living", title: "Switch to Reusable Bottles", points: 10 },
    { id: 12, category: "Eco-Friendly Living", title: "Grow Your Own Vegetables", points: 25 },
  ];

  useEffect(() => {
    // Save completed quests to localStorage whenever the state changes
    localStorage.setItem("completedQuests", JSON.stringify(completedQuests));
  }, [completedQuests]);

  const filteredQuests =
    filter === "All" ? allQuests : allQuests.filter((quest) => quest.category === filter);

  const toggleQuestCompletion = (id) => {
    setCompletedQuests((prev) =>
      prev.includes(id) ? prev.filter((questId) => questId !== id) : [...prev, id]
    );
  };

  return (
    <div className="container">
      <h1>Quests</h1>
      <p>Embark on sustainability quests to make a positive impact on the planet!</p>

      {/* Filter Section */}
      <section style={{ marginTop: "20px" }}>
        <h2>Filter by Category</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {["All", "Energy Efficiency", "Waste Reduction", "Green Transportation", "Eco-Friendly Living"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                style={{
                  padding: "10px 15px",
                  backgroundColor: filter === category ? "#27ae60" : "#f0f0f0",
                  color: filter === category ? "white" : "#333",
                  border: "1px solid #ccc",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>

      {/* Progress Tracker */}
      <section style={{ marginTop: "40px" }}>
        <h2>Your Progress</h2>
        <p>
          You’ve completed <strong>{completedQuests.length}</strong> out of{" "}
          <strong>{allQuests.length}</strong> quests.
        </p>
        <div
          style={{
            backgroundColor: "#e0e0e0",
            height: "20px",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              width: `${(completedQuests.length / allQuests.length) * 100}%`,
              height: "100%",
              backgroundColor: "#27ae60",
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>
      </section>

      {/* Featured Quests */}
      <section style={{ marginTop: "40px" }}>
        <h2>Featured Quests</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <QuestCard
            title="Switch to LED Bulbs"
            description="Save energy by replacing incandescent bulbs with LEDs."
            points={10}
          />
          <QuestCard
            title="Plant a Tree"
            description="Contribute to a greener planet by planting a tree."
            points={30}
          />
          <QuestCard
            title="Zero-Waste Grocery Shopping"
            description="Bring reusable bags and containers for shopping."
            points={25}
          />
          <QuestCard
            title="Install Solar Panels"
            description="Harness renewable energy by installing solar panels."
            points={50}
          />
        </div>
      </section>

      {/* All Quests */}
      <section style={{ marginTop: "40px" }}>
        <h2>All Quests</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {filteredQuests.map((quest) => (
            <div
              key={quest.id}
              style={{
                border: "1px solid #e0e0e0",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: completedQuests.includes(quest.id) ? "#eafaf1" : "white",
              }}
            >
              <h3>{quest.title}</h3>
              <p>Category: {quest.category}</p>
              <p>Points: {quest.points}</p>
              <button
                onClick={() => toggleQuestCompletion(quest.id)}
                style={{
                  backgroundColor: completedQuests.includes(quest.id) ? "#27ae60" : "#f0f0f0",
                  color: completedQuests.includes(quest.id) ? "white" : "#333",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
              >
                {completedQuests.includes(quest.id) ? "Mark as Incomplete" : "Complete Quest"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Quests;
