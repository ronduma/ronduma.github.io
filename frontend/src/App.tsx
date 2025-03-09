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
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
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
// import NotFound from "./pages/NotFound";
import Test from "./pages/Test";

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(lightTheme);
  const [showNavbar, setShowNavbar] = useState(false); // State to control Navbar visibility
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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

  const DrawerList = (
    <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem>
          <Link
            href="/#about"
            onClick={handleSmoothScroll}
            sx={{ color: theme.palette.text.primary }}
          >
            <Typography variant="body1">About</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/#experience"
            onClick={handleSmoothScroll}
            sx={{ color: theme.palette.text.primary }}
          >
            <Typography variant="body1">Experience</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/resume"
            onClick={handleSmoothScroll}
            sx={{ color: theme.palette.text.primary }}
          >
            <Typography variant="body1">Resume</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="/projects"
            onClick={handleSmoothScroll}
            sx={{ color: theme.palette.text.primary }}
          >
            <Typography variant="body1">Projects</Typography>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

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
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", lg: "none" },
              py: 0.5,
              px: 1,
              mx: 0.5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
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
        <Route path="/test" element={<Test />} />
        {/* <Route path="*" element={<NotFound />} /> */}
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
