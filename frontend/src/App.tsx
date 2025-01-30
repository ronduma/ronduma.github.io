import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// mui components
import { Theme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// custom components
import { lightTheme } from "./components/themes";
import Navbar from "./components/Navbar";
import ModeToggler from "./components/ModeToggler";

// pages
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import NotFound from "./pages/NotFound";

const AppContent: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [showNavbar, setShowNavbar] = useState(false); // State to control Navbar visibility

  const location = useLocation(); // 🔥 Get the current route

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
    console.log(theme);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowNavbar(true); // Always show navbar if not on home
      return;
    }

    const banner = document.getElementById("banner");
    if (!banner) {
      console.error("Banner element not found");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0.75 } // Ensure banner is completely out of view
    );

    observer.observe(banner);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!showNavbar && (
        <Box sx={{ position: "absolute", top: 0, left: 0, m: 3 }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{
              display: { xs: "block", lg: "none" },
              border: 1,
              borderColor: "inherit",
              borderRadius: 1,
              py:0.5,
              px:1,
              mx:0.5,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}
      {showNavbar && <Navbar mode={theme.palette.mode} toggle={toggleTheme} />}
      {!showNavbar && (
        <Box sx={{ position: "absolute", top: 0, right: 0, m: 3 }}>
          <ModeToggler mode={theme.palette.mode} toggle={toggleTheme} />
        </Box>
      )}
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
