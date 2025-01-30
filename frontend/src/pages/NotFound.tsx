// mui components
import { Box, Grid2 as Grid, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Grid
      container
      size={{ xs: 12 }}
      id="experience"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh", // Add this to fill the entire viewport height
      }}
    >
      <Typography variant="h3" component="h1" sx={{ m: 4 }}>
        404 Not Found
      </Typography>
      <Box component="img" src="/imgs/404.webp" maxHeight="50vh" />
      <Typography variant="h6" component="div" sx={{ m: 4, textAlign: "center" }}>
        Woops. Either this link doesn't exist, or Ron didn't finish this page
        yet!
      </Typography>
    </Grid>
  );
};

export default NotFound;
