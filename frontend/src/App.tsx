import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

// mui components
import { Theme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
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
  const navigate = useNavigate();
  const [theme, setTheme] = useState(lightTheme);
  const [showNavbar, setShowNavbar] = useState(false); // State to control Navbar visibility
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    if (!href) return;

    const [path, hash] = href.split("#");

    if (path && location.pathname !== path) {
      navigate(path, { replace: true });

      setTimeout(() => {
        const targetElement = document.getElementById(hash);
        targetElement?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const targetElement = document.getElementById(hash);
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{
              display: { xs: "block", lg: "none" },
              border: 1,
              borderColor: "inherit",
              borderRadius: 1,
              py: 0.5,
              px: 1,
              mx: 0.5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="/#about"
                onClick={handleSmoothScroll}
                sx={{ color: theme.palette.text.primary }}
              >
                <Typography variant="body1">About</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="/#experience"
                onClick={handleSmoothScroll}
                sx={{ color: theme.palette.text.primary }}
              >
                <Typography variant="body1">Experience</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="/resume"
                onClick={handleSmoothScroll}
                sx={{ color: theme.palette.text.primary }}
              >
                <Typography variant="body1">Resume</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="/projects"
                onClick={handleSmoothScroll}
                sx={{ color: theme.palette.text.primary }}
              >
                <Typography variant="body1">Projects</Typography>
              </Link>
            </MenuItem>
          </Menu>
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
