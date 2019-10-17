import React from "react";
import "./card-list.styles.css";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster, index) => (
        <h1 key={index}>{monster.name}</h1>
      ))}
    </div>
  );
};
