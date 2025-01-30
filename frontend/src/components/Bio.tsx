import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
} from "@mui/material";

import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

interface BioProps {
  age: number;
}

const Bio: React.FC<BioProps> = ({ age }) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", mx: "auto", my: 6, maxWidth: "40rem" }}>
      {/* image  */}
      <CardMedia
        component="img"
        image="/imgs/pfp.png"
        alt="pfp"
        sx={{
          height: "23rem",
          width: "15rem",
          objectFit: "cover",
          objectPosition: "100% 0",
        }}
      />
      {/* other content  */}
      <CardContent
        sx={{
          py: 0,
          flex: "1 0 auto",
          maxWidth: "calc(40rem - 15rem)", // Account for the image width
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 5 }} gap={1}>
          <Box sx={{ display: "flex", flexDirection: "row" }} gap={1}>
            <CakeOutlinedIcon />
            <Typography component="div" variant="body1">
              {age}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            gap={1}
          >
            <PlaceOutlinedIcon />
            <Typography component="div" variant="body1">
              New York, NY
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            gap={1}
          >
            <WorkOutlineOutlinedIcon />
            <Typography component="div" variant="body1">
              SWE @{" "}
              <Link
                target="_blank"
                href="https://www2.deloitte.com/us/en.html"
                sx={{ color: theme.palette.text.primary }}
              >
                Deloitte Consulting
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            gap={1}
          >
            <SchoolOutlinedIcon />
            <Typography component="div" variant="body1">
              CS @{" "}
              <Link
                target="_blank"
                href="https://www.stevens.edu/"
                sx={{ color: theme.palette.text.primary }}
              >
                Stevens Institute of Technology
              </Link>
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" textAlign="center" my={5}>
          <Typography variant="body2" sx={{ overflowWrap: "break-word" }}>
            Jersey-born, Queens-raised, Filipino blood.
          </Typography>
          <Typography variant="body2" sx={{ overflowWrap: "break-word" }}>
            Developing cool full-stack apps for an AI R&D team :^{")"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Bio;
