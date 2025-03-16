import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#071952", // Lighter Dark Grey
    },
    secondary: {
      main: "#FfFfFf", // Dark Grey
    },
    background: {
      default: "#FfFfFf", // White Cream
      paper: "#FfFfFf", // Slightly lighter background for cards
    },
    text: {
      primary: "#071952", // Dark Grey
      secondary: "#F5F5F5", // Lighter Dark Grey
    },
  },
});

export default theme;
