import React from "react";
import { Dialog, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function FullScreenImageDialog({ open, handleClose, image }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl">
      <Box sx={{ position: "relative", textAlign: "center" }}>
        {/* Close Button */}
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

        {/* Full-Screen Image */}
        <img
          src={image}
          alt="Full-Size Preview"
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            objectFit: "contain",
          }}
        />
      </Box>
    </Dialog>
  );
}

export default FullScreenImageDialog;
