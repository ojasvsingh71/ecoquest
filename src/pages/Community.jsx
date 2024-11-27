import React, { useState } from "react";

function Community() {
  const [post, setPost] = useState("");

  const handlePostChange = (e) => setPost(e.target.value);

  const handlePostSubmit = () => {
    if (post.trim()) {
      alert("Your post has been submitted!");
      setPost(""); // Clear the post input
    }
  };

  return (
    <div className="container">
      <h1>Community Hub</h1>
      <p>Connect, share, and inspire others to live sustainably!</p>

      {/* Section: Community Challenges */}
      <section style={{ marginTop: "20px" }}>
        <h2>Ongoing Challenges</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {["Plastic-Free Week", "Community Tree Planting", "Eco-Friendly Shopping"].map((challenge, index) => (
            <div className="quest-card" key={index} style={{ border: "1px solid #e0e0e0", borderRadius: "10px", padding: "20px", width: "calc(33.33% - 20px)" }}>
              <h3>{challenge}</h3>
              <p>{index === 0 ? "Challenge yourself to avoid single-use plastics for a week." : index === 1 ? "Participate in a local tree-planting event this weekend." : "Share your best eco-friendly product finds with the community."}</p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#27ae60",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#2ecc71")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#27ae60")}
              >
                {index === 0 ? "Join Challenge" : index === 1 ? "Sign Up" : "Contribute"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section: User Stories */}
      <section style={{ marginTop: "40px" }}>
        <h2>Inspiring Stories</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { name: "Emma from Seattle", story: "I started biking to work last year, and it’s been amazing for both my health and the environment. I've reduced my emissions by 30%! 🚲🌱" },
            { name: "Raj from Mumbai", story: "Switching to solar panels was the best decision I ever made. Now, I power my home sustainably while saving on bills. 🌞" },
            { name: "Lila from London", story: "My family adopted a zero-waste lifestyle, and it’s incredible to see how much we’ve reduced our trash. 🗑️♻️" },
          ].map((user, index) => (
            <div key={index} style={{ border: "1px solid #e0e0e0", padding: "20px", borderRadius: "10px" }}>
              <h3>{user.name}</h3>
              <p>{user.story}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Discussion Board */}
      <section style={{ marginTop: "40px" }}>
        <h2>Discussion Board</h2>
        <div style={{ border: "1px solid #e0e0e0", padding: "20px", borderRadius: "10px" }}>
          <h3>Share Your Thoughts</h3>
          <textarea
            placeholder="What's your latest eco-friendly discovery?"
            value={post}
            onChange={handlePostChange}
            style={{
              width: "100%",
              height: "100px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              transition: "border-color 0.3s",
            }}
          />
          <button
            onClick={handlePostSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "#27ae60",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2ecc71")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#27ae60")}
          >
            Post
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3>Recent Posts</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {[
              { user: "John", post: "I found a great app for tracking your carbon footprint! Highly recommend!" },
              { user: "Sarah", post: "Does anyone know where I can recycle electronics in NYC?" },
              { user: "Mike", post: "Just completed the ‘No Plastic for a Week’ challenge! It was tough but so worth it." },
            ].map((post, index) => (
              <li key={index} style={{ borderBottom: "1px solid #e0e0e0", padding: "10px 0" }}>
                <strong>{post.user}:</strong> {post.post}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Community;
