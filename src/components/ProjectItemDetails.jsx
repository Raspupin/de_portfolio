import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick"; // Import carousel
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Box,
  Typography,
  Container,
  CardMedia,
  Button,
  Link,
  IconButton,
  Dialog,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import projectsData from "../data/projectData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";

function ProjectItemDetails() {
  const { name } = useParams(); // Get project Name from URL
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.name === name); // Find project by Name

  const [open, setOpen] = useState(false);
  // Close full-screen mode
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedImg, setSelectedImg] = useState("");
  const handleImageClick = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  if (!project) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <Typography sx={{ m: 2, p: 2 }} variant="h4">
          Project Not Found
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Back to Projects
        </Button>
      </Container>
    );
  }
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show ONLY one slide at a time
    slidesToScroll: 1, // Move one slide per scroll
    autoplay: false,
    //autoplaySpeed: 3000 //disabled due to autoplay false
    arrows: true,
    adaptiveHeight: true, // Ensures images are aligned properly
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Always in a column
          alignItems: "center",
          gap: 4, // Space between sections
          p: 3,
          bgcolor: "primary.main",
          borderRadius: 3,
          boxShadow: 8,
          border: "5px solid",
          borderColor: "background.paper",
          maxWidth: 800, // Prevents it from stretching too wide
          mx: "auto", // Centers it horizontally
        }}
      >
        {/* Top: Project Details */}
        <Box sx={{ textAlign: "center", width: "90%" }}>
          <Typography
            variant="h4"
            sx={{
              color: "background.paper",
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
            }}
          >
            {project.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "background.paper", mt: 2 }}>
            {project.description}
          </Typography>
        </Box>

        {/* Middle: Project Specs & GitHub Link */}
        <Container sx={{ textAlign: "center", mt: 1, mb: 0 }}>
          {project.githubProject && (
            <IconButton
              component={Link}
              href={project.githubProject}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub project"
              sx={{ border: "2px solid #FFFFFF", borderRadius: "3px" }}
            >
              <GitHubIcon sx={{ color: "background.paper", fontSize: 32 }} />
              <Typography
                variant="body1"
                sx={{ color: "background.paper", ml: 1 }}
              >
                GitHub Project Page
              </Typography>
            </IconButton>
          )}
        </Container>
        <Container sx={{ textAlign: "center", mt: 0 }}>
          {project.exampleLink && (
            <IconButton
              component={Link}
              href={project.exampleLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit outcome link"
              sx={{ border: "2px solid #FFFFFF", borderRadius: "3px" }}
            >
              <PublicIcon sx={{ color: "background.paper", fontSize: 32 }} />
              <Typography
                variant="body1"
                sx={{ color: "background.paper", ml: 1 }}
              >
                View Outcome
              </Typography>
            </IconButton>
          )}
        </Container>

        {/* Bottom: Carousel */}
        <Typography
          variant="h5"
          sx={{ color: "background.paper", fontWeight: "bold", mb: 0 }}
        >
          Screenshots
        </Typography>
        <Box
          sx={{
            width: "90%",
            maxWidth: 450,
            border: "5px solid #FFFFFF",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Slider {...settings}>
            {[].concat(project.image).map((img, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(img)} // Click to open full-screen
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
        {/* Back Button */}
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: "1.005rem",
            border: "4px solid #FFFFFF",
            mt: 2,
          }}
          onClick={() => navigate("/projects")}
        >
          Back to Projects
        </Button>
      </Box>

      {/* Full-Screen Image Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="xl">
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImg}
            alt="Full-Size Preview"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Dialog>
    </Container>
  );
}

export default ProjectItemDetails;
