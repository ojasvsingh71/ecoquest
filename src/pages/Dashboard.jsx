import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Data for the Pie chart (visual progress)
const data1 = [
  { name: "Energy Savings", value: 25 },
  { name: "Waste Reduction", value: 20 },
  { name: "Transportation", value: 15 },
  { name: "Water Conservation", value: 10 },
  { name: "Sustainable Food Choices", value: 10 },
  { name: "Green Energy Usage", value: 10 },
  { name: "Other", value: 10 },
];

// Data for the second Pie chart (example alternative data)
const data2 = [
  { name: "Home Energy Use", value: 35 },
  { name: "Recycling", value: 25 },
  { name: "Eco-friendly Products", value: 15 },
  { name: "Electric Vehicles", value: 10 },
  { name: "Solar Panels", value: 10 },
  { name: "Other", value: 5 },
];


const COLORS = [
  "#27ae60", "#2ecc71", "#3498db", "#9b59b6", "#f39c12", "#8e44ad", "#e74c3c"
];

// Recent activities section
const recentActivities = [
  { id: 1, activity: "Completed 'Switch to LED Bulbs' quest", date: "Nov 19, 2024" },
  { id: 2, activity: "Joined 'Bike to Work Challenge'", date: "Nov 18, 2024" },
  { id: 3, activity: "Offset 20kg CO2 through tree planting", date: "Nov 17, 2024" },
];

// Leaderboard snapshot section
const leaderboard = [
  { rank: 1, name: "Mradul", points: 150 },
  { rank: 2, name: "Khushi", points: 140 },
  { rank: 3, name: "Akshat", points: 130 },
  { rank: 4, name: "Muskan", points: 120 },
  { rank: 5, name: "Kanika", points: 110 },
  { rank: 6, name: "Milind", points: 105 },
  { rank: 7, name: "Ayushi", points: 100 },
  { rank: 8, name: "Kanak", points: 95 },
  { rank: 9, name: "Prabal", points: 90 },
  { rank: 10, name: "Isha", points: 85 },
  { rank: 11, name: "Harsh", points: 80 },
  { rank: 12, name: "Divya", points: 75 },
  { rank: 13, name: "Ayush", points: 70 },
  { rank: 14, name: "Shiv", points: 65 },
  { rank: 15, name: "Rupa", points: 50 },
];


function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Track your progress and see the impact of your sustainable lifestyle.</p>

      {/* Visual Progress Section 1 */}
      <section style={{ marginTop: "40px" }}>
        <h2>Your Impact (Energy and Sustainability)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data1}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* Visual Progress Section 2 */}
      <section style={{ marginTop: "40px" }}>
        <h2>Your Impact (Eco-Friendly Lifestyle)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data2}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* Recent Activities Section */}
      <section style={{ marginTop: "40px" }}>
        <h2>Recent Activities</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {recentActivities.map((activity) => (
            <li
              key={activity.id}
              style={{
                padding: "10px 15px",
                marginBottom: "10px",
                backgroundColor: "#f9f9f9",
                borderRadius: "5px",
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>{activity.activity}</strong>
              </p>
              <p style={{ margin: 0, color: "#7f8c8d", fontSize: "0.9rem" }}>{activity.date}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Leaderboard Snapshot Section */}
<section style={{ marginTop: "40px" }}>
  <h2>Leaderboard Snapshot</h2>
  <div
    style={{
      border: "1px solid #e0e0e0",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      maxHeight: "400px",
      overflowY: "auto", // Makes the leaderboard scrollable if content exceeds the height
    }}
  >
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1rem" }}>
      <thead>
        <tr style={{ backgroundColor: "#27ae60", color: "white", fontWeight: "bold" }}>
          <th style={{ padding: "15px", textAlign: "center" }}>Rank</th>
          <th style={{ padding: "15px", textAlign: "left" }}>Name</th>
          <th style={{ padding: "15px", textAlign: "left" }}>Points</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((user, index) => (
          <tr
            key={user.rank}
            style={{
              backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
              transition: "background-color 0.3s ease",
            }}
          >
            <td
              style={{
                padding: "15px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {user.rank === 1 && "🥇"}
              {user.rank === 2 && "🥈"}
              {user.rank === 3 && "🥉"}
              {user.rank > 3 && `#${user.rank}`}
            </td>
            <td
              style={{
                padding: "15px",
                textAlign: "left",
                fontWeight: index === 0 ? "bold" : "normal",
                color: index === 0 ? "#27ae60" : "#333",
              }}
            >
              {user.name}
            </td>
            <td
              style={{
                padding: "15px",
                textAlign: "left",
                color: index === 0 ? "#27ae60" : "#000",
              }}
            >
              {user.points} pts
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#27ae60",
          color: "white",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
        onClick={() => alert("View full leaderboard feature coming soon!")}
      >
        View Full Leaderboard
      </button>
    </div>
  </div>
</section>



      {/* Eco Tips Section */}
      <section style={{ marginTop: "40px", backgroundColor: "#ecf9f1", padding: "20px", borderRadius: "10px" }}>
        <h2>Eco Tips</h2>
        <ul>
          <li>Turn off lights when you leave a room.</li>
          <li>Use a reusable water bottle instead of plastic bottles.</li>
          <li>Switch to public transportation whenever possible.</li>
          <li>Support local farmers and buy seasonal produce.</li>
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
