import React from "react";
import ReactDOM from "react-dom/client";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Timeline</h1>
      <Timeline />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);