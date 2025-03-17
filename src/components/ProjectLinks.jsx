import React from "react";
import { Container, Stack, IconButton, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ProjectLinks({ data }) {
  return (
    <Container sx={{ textAlign: "center", mt: 0, width: "80%" }}>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {/* GitHub Project Link */}
        {data.githubProject && (
          <IconButton
            component={Link}
            href={data.githubProject}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub project"
            sx={{
              border: "2px solid #FFFFFF",
              borderRadius: "3px",
              backgroundColor: "background.paper",
              width: { xs: "80%", sm: "60%", md: "auto" },
              "&:hover": {
                transform: "scale(1.01)",
                backgroundColor: "background.paper",
              },
            }}
          >
            <GitHubIcon sx={{ color: "primary.main", fontSize: 32 }} />
            <Typography variant="body1" sx={{ color: "primary.main", ml: 2 }}>
              GitHub Project Page
            </Typography>
          </IconButton>
        )}

        {/* Example/Outcome Link */}
        {data.exampleLink && (
          <IconButton
            component={Link}
            href={data.exampleLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit outcome link"
            sx={{
              border: "2px solid #FFFFFF",
              borderRadius: "3px",
              backgroundColor: "background.paper",
              width: { xs: "80%", sm: "60%", md: "auto" },
              "&:hover": {
                transform: "scale(1.01)",
                backgroundColor: "background.paper",
              },
            }}
          >
            <PublicIcon sx={{ color: "primary.main", fontSize: 32 }} />
            <Typography variant="body1" sx={{ color: "primary.main", ml: 1 }}>
              View Outcome
            </Typography>
          </IconButton>
        )}

        {/* LinkedIn Post Link */}
        {data.linkedInPost && (
          <IconButton
            component={Link}
            href={data.linkedInPost}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit post link in LinkedIn"
            sx={{
              border: "2px solid #FFFFFF",
              borderRadius: "3px",
              backgroundColor: "background.paper",
              width: { xs: "80%", sm: "60%", md: "auto" },
              "&:hover": {
                transform: "scale(1.01)",
                backgroundColor: "background.paper",
              },
            }}
          >
            <LinkedInIcon sx={{ color: "primary.main", fontSize: 32 }} />
            <Typography variant="body1" sx={{ color: "primary.main", ml: 1 }}>
              LinkedIn Post
            </Typography>
          </IconButton>
        )}
      </Stack>
    </Container>
  );
}

export default ProjectLinks;
