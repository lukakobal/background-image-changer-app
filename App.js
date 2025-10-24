import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [background, setBackground] = useState("nature");

  const changeBackground = (type) => {
    setBackground(type);
  };
  const images = {
    nature:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
    city: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=80",
    ocean:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${images[background]})` }}
    >
      <div className="buttons">
        <button onClick={() => changeBackground("nature")}>🌲 Nature</button>
        <button onClick={() => changeBackground("city")}>🏙️ City</button>
        <button onClick={() => changeBackground("ocean")}>🌊 Ocean</button>
      </div>
      <h1>Backgroung: {background}</h1>
    </div>
  );
}
