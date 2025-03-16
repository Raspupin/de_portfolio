import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import aboutData from "./data/aboutMeInfo.json";
import Footer from "./components/Footer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectItemDetails from "./components/ProjectItemDetails";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures the full page height
        flex: 1,
        pt: "64px",
      }}
    >
      <Router>
        <Navbar data={aboutData} />
        <Box sx={{ flex: 1 }}>
          <Hero />
          <Routes>
            <Route path="/" element={<Navigate to="/projects" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<ProjectItemDetails />} />
            <Route path="/about" element={<About data={aboutData} />} />
          </Routes>
        </Box>
        <Footer data={aboutData} />
      </Router>
    </Box>
  );
}

export default App;
