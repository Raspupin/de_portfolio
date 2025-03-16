import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer({ data }) {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        bgcolor: "text.primary",
        color: "background.paper",
        borderTop: "2px solid",
        borderColor: "background.paper",
      }}
    >
      {/* Navigation Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 1 }}>
        <Link
          href="/"
          sx={{
            color: "background.paper",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Projects
        </Link>
        <Link
          href="/about"
          sx={{
            color: "background.paper",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          About Me
        </Link>
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}>
        <IconButton
          component="a"
          href={`mailto:${data.email}`}
          sx={{
            color: "background.paper",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          component="a"
          href={data.linkedinURL || "https://www.linkedin.com/"}
          target="_blank"
          sx={{
            color: "background.paper",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href={data.githubURL || "https://github.com/"}
          target="_blank"
          sx={{
            color: "background.paper",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography variant="body2">
        © 2025 {data.name || "your name"} . All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
