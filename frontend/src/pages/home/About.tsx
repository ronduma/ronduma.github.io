// mui components
import { Grid2 as Grid, Typography } from "@mui/material";

// custom components
import Bio from "../../components/Bio";

// props
const bday = new Date("May 31, 2002").getTime();
const now = Date.now();
const age = parseInt(
  ((now - bday) / (1000 * 60 * 60 * 24 * 365.25)).toString()
);

const About = () => {
  return (
    <Grid
      container
      size={{ xs: 12 }}
      id="about"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // my: 6,
      }}
    >
      <Grid size={{ xs: 12 }}>
        <Typography variant="h2" component="h2" textAlign="center" mx="auto">
          About Me
        </Typography>
        <Bio age={age} />
      </Grid>

    </Grid>
  );
};

export default About;
