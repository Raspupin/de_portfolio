import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactMe({ data }) {
  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        textAlign: "center",
        bgcolor: "primary.main",
        borderRadius: 2,
        width: "100%", // Ensures it takes full width
        maxWidth: 600, // Prevents it from being too wide on larger screens
        borderTop: "2px solid",
        borderBottom: "2px solid",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on larger screens
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 1, md: 2 }, // Adds spacing between elements
        px: { xs: 2, md: 4 }, // Adds horizontal padding to prevent cut-off
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        sx={{ mr: 1, fontWeight: "bold", color: "background.paper" }}
      >
        Contact Me
      </Typography>

      {/* Email Icon + Email Text */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <EmailIcon sx={{ color: "background.paper" }} />
        <Typography variant="body1" sx={{ color: "background.paper" }}>
          {data.email}
        </Typography>
      </Box>

      {/* LinkedIn Icon */}
      <IconButton
        component={Link}
        href={data.linkedinURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
        sx={{ mt: { xs: 1, md: 0 } }} // Adds space below LinkedIn icon on small screens
      >
        <LinkedInIcon sx={{ color: "background.paper", fontSize: 32 }} />
        <Typography variant="body1" sx={{ color: "background.paper" }}>
          LinkedIn
        </Typography>
      </IconButton>
    </Box>
  );
}

export default ContactMe;
