import React from "react";
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
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import projectsData from "../data/projectData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectItemDetails() {
  const { name } = useParams(); // Get project Name from URL
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.name === name); // Find project by Name

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
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on larger screens
          alignItems: "center",
          gap: 3,
          p: 3,
          bgcolor: "primary.main",
          borderRadius: 3,
          boxShadow: 8,
          border: "5px solid",
          borderColor: "background.paper",
        }}
      >
        {/* Left Side: Carousel */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "100%", maxWidth: 350 }}>
            <Slider {...settings}>
              {[].concat(project.image).map(
                (
                  img,
                  index // Always treat as array
                ) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", justifyContent: "center" }}
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
                )
              )}
            </Slider>
          </Box>
        </Box>

        {/* Middle: Project Details */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ color: "background.paper", fontWeight: "bold", mb: 2 }}
          >
            {project.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "background.paper", mt: 2 }}>
            {project.description}
          </Typography>

          {/* Container for Project specs */}
          <Container sx={{ flex: 1, textAlign: "left", mt: 5, mb: 1 }}>
            {/* <Typography
              variant="body1"
              sx={{ color: "background.paper", mt: 2 }}
            >
              Platform: {project.platform}
            </Typography> */}
            {/* GitHub Icon */}
            <IconButton
              component={Link}
              href={project.githubProject}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my App Store page"
              sx={{ mt: { xs: 1, md: 0 } }} // Adds space below LinkedIn icon on small screens
            >
              <GitHubIcon sx={{ color: "background.paper", fontSize: 32 }} />
              <Typography variant="body1" sx={{ color: "background.paper" }}>
                Github Project Page
              </Typography>
            </IconButton>
          </Container>

          {/* Back Button */}

          <Button
            variant="contained"
            sx={{
              mt: 3,
              border: "1px solid",
              textTransform: "none",
              fontSize: "1.005rem",
            }}
            onClick={() => navigate("/")}
          >
            Back to Projects
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectItemDetails;
