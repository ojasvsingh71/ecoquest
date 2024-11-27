import React from "react";

function QuestCard({ title, description, points }) {
  return (
    <div className="quest-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{points} Points</span>
    </div>
  );
}

export default QuestCard;
