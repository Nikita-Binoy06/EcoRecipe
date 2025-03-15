import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from "./App";

// Create a root using the new React 18 API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
