// mui components
import { 
  Grid2 as Grid, 
} from "@mui/material";

// custom components


// props

const Resume = () => {
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
      <iframe 
          id="pdf-iframe"
          src="/Ron_Dumalagan_Resume.pdf" // ✅ Correct Path
          allowFullScreen // ✅ Allow fullscreen mode
          style={{ 
            border: "none",
            width:"100%",
            height:"100vh", 
          }}
        />
    </Grid>
  );
};

export default Resume;
