import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#EDE8D0",
      paper: "#F5F5DC",
    },
    text: {
      primary: "#2B2B2B",
      secondary: "#B38E83",
    },
    primary: {
      main: "#004369",
      light: "#096267",
      dark: "#000E2F",
      contrastText: "#F5F5DC",
    },
    secondary: {
      main: "#096267",
      contrastText: "#F5F5DC",
    },
    divider: "#B38E83",
  },
});