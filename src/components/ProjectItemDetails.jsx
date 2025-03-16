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
  Stack,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import projectsData from "../data/projectData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
    <Container sx={{ mt: 4, mb: 2 }}>
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
          <Typography
            variant="body1"
            sx={{
              color: "background.paper",
              mt: 2,
              textAlign: "justify",
              wordBreak: "break-word",
              whiteSpace: "normal",
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </Typography>
        </Box>

        {/* Middle: Project Specs & Links */}
        <Container sx={{ textAlign: "center", mt: 0, width: "80%" }}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {project.githubProject && (
              <IconButton
                component={Link}
                href={project.githubProject}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub project"
                sx={{
                  border: "2px solid #FFFFFF",
                  borderRadius: "3px",
                  backgroundColor: "background.paper",
                  width: { xs: "80%", sm: "60%", md: "auto" },
                  "&:hover": {
                    transform: "scale(1.01)", // Slight increase in size
                    backgroundColor: "background.paper", // Prevent color change
                  },
                }}
              >
                <GitHubIcon sx={{ color: "primary.main", fontSize: 32 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "primary.main", ml: 2 }}
                >
                  GitHub Project Page
                </Typography>
              </IconButton>
            )}
            {project.exampleLink && (
              <IconButton
                component={Link}
                href={project.exampleLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit outcome link"
                sx={{
                  border: "2px solid #FFFFFF",
                  borderRadius: "3px",
                  backgroundColor: "background.paper",
                  width: { xs: "80%", sm: "60%", md: "auto" },
                  "&:hover": {
                    transform: "scale(1.01)", // Slight increase in size
                    backgroundColor: "background.paper", // Prevent color change
                  },
                }}
              >
                <PublicIcon sx={{ color: "primary.main", fontSize: 32 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "primary.main", ml: 1 }}
                >
                  View Outcome
                </Typography>
              </IconButton>
            )}
            {project.linkedInPost && (
              <IconButton
                component={Link}
                href={project.linkedInPost}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit post link in linkedin"
                sx={{
                  border: "2px solid #FFFFFF",
                  borderRadius: "3px",
                  backgroundColor: "background.paper",
                  width: { xs: "80%", sm: "60%", md: "auto" },
                  "&:hover": {
                    transform: "scale(1.01)", // Slight increase in size
                    backgroundColor: "background.paper", // Prevent color change
                  },
                }}
              >
                <LinkedInIcon sx={{ color: "primary.main", fontSize: 32 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "primary.main", ml: 1 }}
                >
                  LinkedIn Post
                </Typography>
              </IconButton>
            )}
          </Stack>
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
            fontSize: "1.01rem",
            border: "4px solid #FFFFFF",
            mt: 2,
            width: "80%",
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
