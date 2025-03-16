import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link as LinkMUI,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger menu icon
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

function Navbar({ data }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects small screens

  const isProjectsActive = location.pathname.startsWith("/projects");
  const isAboutActive = location.pathname === "/about";

  // State for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <AppBar position="fixed" sx={{ bgcolor: "primary.main", zIndex: 1100 }}>
      <Toolbar>
        {/* LinkedIn Icon */}
        <IconButton
          component={LinkMUI}
          href={data.linkedinURL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: { xs: 1, md: 0 } }} // Adds space below icon on small screens
          aria-label="Visit my LinkedIn profile"
        >
          <LinkedInIcon
            sx={{
              color: "background.paper",
              fontSize: 32,
              "&:hover": { transform: "scale(1.15)" },
            }}
          />
        </IconButton>

        {/* Name */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {data.name}
        </Typography>

        {/* Desktop View: Show Buttons */}
        {!isMobile && (
          <Box sx={{ gap: 1, display: "flex" }}>
            <Button
              component={Link}
              to="/projects"
              color="inherit"
              sx={{
                fontWeight: isProjectsActive ? "bold" : "normal",
                borderBottom: isProjectsActive ? "2px solid" : "none",
                backgroundColor: isProjectsActive
                  ? "background.paper"
                  : "primary.main",
                color: isProjectsActive ? "primary.main" : "background.paper",
                transition: "transform 0.2s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                border: "1px solid",
                mr: 1,
                textTransform: "none",
                fontSize: "1.005rem",
              }}
            >
              Projects
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{
                fontWeight: isAboutActive ? "bold" : "normal",
                borderBottom: isAboutActive ? "2px solid" : "none",
                backgroundColor: isAboutActive
                  ? "background.paper"
                  : "primary.main",
                color: isAboutActive ? "primary.main" : "background.paper",
                transition: "transform 0.2s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                border: "1px solid",
                textTransform: "none",
                fontSize: "1.005rem",
              }}
            >
              About
            </Button>
          </Box>
        )}

        {/* Mobile View: Show Dropdown Menu */}
        {isMobile && (
          <>
            <IconButton onClick={handleOpenMenu} color="inherit">
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              sx={{ mt: 1 }}
            >
              <MenuItem
                component={Link}
                to="/projects"
                onClick={handleCloseMenu}
                sx={{ fontWeight: isProjectsActive ? "bold" : "normal" }}
              >
                Projects
              </MenuItem>
              <MenuItem
                component={Link}
                to="/about"
                onClick={handleCloseMenu}
                sx={{ fontWeight: isAboutActive ? "bold" : "normal" }}
              >
                About
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
