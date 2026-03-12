import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#940d5c", // The Teal from your sidebar
      light: "#CCFBF1",
      dark: "#760f68",
    },
    secondary: {
      main: "#1E1B4B", // The Navy Sidebar
    },
    background: {
      default: "#F8FAFC", // The light grey background
      paper: "#ffffff",
    },
    text: {
      primary: "#1E293B",
      secondary: "#64748B",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none", // Keeps buttons from being all-caps
    },
  },
  shape: {
    borderRadius: 8, // Rounds the corners of cards and buttons
  },
});

export default theme;
