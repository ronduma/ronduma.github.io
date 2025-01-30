import { createTheme } from "@mui/material/styles";

const baseTheme = {
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: "light",
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: "dark",
    background: {
      paper: "#212121",
      default: "#212121",
    }
  },
});
