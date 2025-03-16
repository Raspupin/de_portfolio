import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ProjectItem from "./ProjectItem";
import projectsData from "../data/projectData.json";
import { Link } from "react-router-dom";

// Example projects (you can add more later)
function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        py: 0,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "50px",
          background:
            "linear-gradient(to right, rgba(129, 129, 129, 0.1), transparent)",
          zIndex: -1,
        },
        "&::before": {
          left: 10,
        },
        "&::after": {
          right: 10,
          background:
            "linear-gradient(to left, rgba(129, 129, 129, 0.1), transparent)",
        },
      }}
    >
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: "bold",
            color: "text.primary",
            position: "relative", // Required for absolute underline
            pb: 3, // Padding to make space for the underline
            "&::after": {
              content: '""',
              position: "absolute",
              left: "50%",
              bottom: 0,
              width: "60%", // Adjust width of underline
              height: "3px", // Thickness of underline
              backgroundColor: "text.primary",
              opacity: 0.3, // Sets underline opacity
              transform: "translateX(-50%)", // Centers the underline
            },
          }}
        >
          Projects
        </Typography>

        {/* Responsive Flexbox Layout */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5, // Spacing between items
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                width: { xs: "80%", sm: "48%", md: "30%" }, // Prevent shrinking
                maxWidth: 400, // Ensures cards don't become too small
                display: "flex", // Needed to center items properly
                justifyContent: "center",
                "&:hover": {
                  transform: "scale(1.07)",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)", // Soft shadow on hover
                },
              }}
            >
              {/* Wrap ProjectItem inside a Link */}
              <Link
                to={`/projects/${project.name}`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ProjectItem image={project.image[0]} name={project.name} />
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
