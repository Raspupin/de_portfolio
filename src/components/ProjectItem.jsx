import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

function ProjectItem({ image, name }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "primary.main",
        boxShadow: 6, // Stronger shadow for depth
        borderRadius: 3, // Softer rounded corners
        p: 2,
        border: "5px solid", // Full border around the card
        borderColor: "background.paper", // Uses primary color for the border
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          height: 200,
          objectFit: "cover",
          borderRadius: 2,
          border: "2px solid", // Full border around the card
          borderColor: "background.paper", // Uses primary color for the border
        }}
      />
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "background.paper" }}
        >
          {name}
        </Typography>
      </Box>
    </Card>
  );
}

export default ProjectItem;
