import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./files/Navbar";
import Home from "./views/home"; // Ensure correct case
import Recipes from "./views/Recipe";
import Community from "./views/Community";
import Rewards from "./views/Rewards";
import Profile from "./views/Profile";
import UploadRecipe from "./views/UploadRecipe";
import Footer from "./files/Footer";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/community" element={<Community />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<UploadRecipe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
