import React from "react"
import { createRoot } from "react-dom"
import App from "./App.jsx"
import { BrowserRouter as Router } from "react-router-dom"

createRoot(document.querySelector("#root")).render(
  <Router>
    <App />
  </Router>
)
