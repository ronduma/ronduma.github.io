import * as React from "react";

// mui components
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
} from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

interface TimelineObjectProps {
  company: string;
  title: string;
  date: string;
  img: string;
  imgHeight: string;
  description: string;
}

const TimelineObject: React.FC<TimelineObjectProps> = ({ company, title, date, img, imgHeight, description }) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <TimelineItem sx={{}}>
        <TimelineOppositeContent
          sx={{my:"auto"}}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {date}
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              height: "5rem",
              width: "5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0",
              backgroundColor: "white",
              padding: "3rem",
              border: `2px solid ${theme.palette.mode == "dark" ? theme.palette.grey[500] : theme.palette.grey[500]}`,
            }}
          >
            <Box
              component="img"
              src={img}
              sx={{
                height: imgHeight,
                width: "auto",
                objectFit: "contain",
              }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
      <TimelineContent sx={{ px: 2 }}>
        <Box
          sx={{
            position: "relative",
            backgroundColor: theme.palette.mode == "dark" ? theme.palette.grey[700] : theme.palette.grey[300],
            borderRadius: "10px",
            padding: 2,
            maxWidth: "25rem",
            boxShadow: 1,
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "-10px", // Adjust based on alignment
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderRight: `10px solid ${theme.palette.mode == "dark" ? theme.palette.grey[700] : theme.palette.grey[300]}`,
              transform: "translateY(-50%)",
            },
          }}
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" component="span">
              {company}
            </Typography>
            <Typography variant="body1" component="span">
              {title}
            </Typography>
          </Box>
          <Divider sx={{my:1}}/>
          <Typography variant="body2" component="span">
            {description}
          </Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineObject;
