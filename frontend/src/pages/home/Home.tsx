import { FC } from "react";

// mui components
import { Box, Grid2 as Grid, Link, Stack, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

// custom components
import About from "./About";
import Experience from "./Experience";

interface HomeProps {
  theme: Theme;
}

const Home: FC<HomeProps> = ({ theme }) => {
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const href = event.currentTarget.getAttribute("href");

    if (href && !href.startsWith("#")) return;
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Grid
      container
      sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      gap={8}
    >
      <Grid
        size={{ xs: 12 }}
        id="banner"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2 },
        }}
        gap={2}
      >
        <Box
          flexDirection="row"
          sx={{
            display: { xs: "none", lg: "flex" },
            position: "absolute",
            top: 0,
            my: 4,
          }}
          gap={4}
        >
          <Link
            href="#about"
            onClick={handleSmoothScroll}
            sx={{ color: theme.palette.text.primary }}
          >
            <Typography variant="h5">About</Typography>
          </Link>
          <Link
            href="#experience"
            onClick={handleSmoothScroll}
            sx={{ color: theme.palette.text.primary }}
          >
            <Typography variant="h5">Experience</Typography>
          </Link>
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
        <Typography variant="h1" component="h1" textAlign="center">
          Ron Dumalagan
        </Typography>
        <Typography variant="h5" component="h2" textAlign="center">
          Software Engineer, Food Enjoyer, Terrible Chess Player
        </Typography>
        <Stack direction="row" gap={2}>
          <Link
            target="_blank"
            sx={{ color: theme.palette.text.primary }}
            href="https://www.linkedin.com/in/rondumalagan/"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link
            target="_blank"
            sx={{ color: theme.palette.text.primary }}
            href="https://github.com/ronduma"
          >
            <GitHubIcon fontSize="large" />
          </Link>
          <Link
            target="_blank"
            sx={{ color: theme.palette.text.primary }}
            href="mailto:rpdumalagan@gmail.com"
          >
            <EmailIcon fontSize="large" />
          </Link>
        </Stack>
      </Grid>

      {/* Other Content */}
      <Grid>
        <About />
      </Grid>
      <Grid>
        <Experience />
      </Grid>
    </Grid>
  );
};

export default Home;
