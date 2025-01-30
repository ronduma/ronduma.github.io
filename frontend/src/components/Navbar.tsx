import { FC, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// mui components
import { Theme, useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// custom components
import ModeToggler from "./ModeToggler";

interface NavbarProps {
  mode: string;
  toggle: (theme: Theme) => void;
}

const Navbar: FC<NavbarProps> = ({ mode, toggle }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
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
  return (
    <Box sx={{ flexGrow: 1, mb: 8 }}>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Menu Icon (Left Side) */}
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
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "row",
              ml: "auto",
            }}
            gap={8}
          >
            <Link
              href="/#about"
              onClick={handleSmoothScroll}
              sx={{ color: theme.palette.text.primary }}
            >
              <Typography variant="h5">About</Typography>
            </Link>
            <Link
              href="/#experience"
              onClick={handleSmoothScroll}
              sx={{ color: theme.palette.text.primary }}
            >
              <Typography variant="h5">Experience</Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", mx: "auto" }}>
            <Link
              href="/"
              onClick={handleSmoothScroll}
              sx={{ color: theme.palette.text.primary }}
            >
              <Typography
                variant="h2"
                component="div"
                sx={{ fontSize: "24pt", ml: { md: 0, lg: 4 } }}
              >
                Ron Dumalagan
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "row",
              mr: "auto",
            }}
            gap={8}
          >
            <Link
              href="/resume"
              onClick={handleSmoothScroll}
              sx={{ color: theme.palette.text.primary }}
            >
              <Typography variant="h5">Resume</Typography>
            </Link>
            <Link
              href="/projects"
              onClick={handleSmoothScroll}
              sx={{ color: theme.palette.text.primary }}
            >
              <Typography variant="h5">Projects</Typography>
            </Link>
          </Box>

          {/* Mode Toggler (Right Side) */}
          <ModeToggler mode={mode} toggle={toggle} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
