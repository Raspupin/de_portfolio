import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Container, Button } from "@mui/material";
import projectsData from "../data/projectData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullScreenImageDialog from "../components/FullScreenImageDialog";
import ImageCarousel from "../components/ImageCarousel";
import ProjectLinks from "./ProjectLinks";

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
              textAlign: "center",
              wordBreak: "break-word",
              whiteSpace: "normal",
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </Typography>
        </Box>

        {/* Middle: Project Specs & Links */}
        <ProjectLinks data={project} />

        {/* Bottom: Carousel */}
        <ImageCarousel
          title="Screenshots"
          images={project.image}
          onImageClick={handleImageClick}
        />

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
      <FullScreenImageDialog
        open={open}
        handleClose={handleClose}
        image={selectedImg}
      />
    </Container>
  );
}

export default ProjectItemDetails;
