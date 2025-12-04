import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <h1>Hello Guesh 👋</h1>
      <p>Your React Sandbox is working perfectly!</p>

      <button onClick={() => alert("Welcome to React!")}>
        Click me 🚀
      </button>
    </div>
  );
}
