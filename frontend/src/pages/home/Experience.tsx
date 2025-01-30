// mui components
import { Grid2 as Grid, Typography } from "@mui/material";

// custom components
import ExperienceTimeline from "../../components/timeline/Timeline";

// props

const Experience = () => {
  return (
    <Grid
      container
      size={{ xs: 12 }}
      id="experience"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid size={{ xs: 12 }} sx={{ py: 10 }}>
        <Typography variant="h2" component="h2" textAlign="center" mx="auto" my={2}>
          Experience
        </Typography>
        <ExperienceTimeline />
      </Grid>
    </Grid>
  );
};

export default Experience;
