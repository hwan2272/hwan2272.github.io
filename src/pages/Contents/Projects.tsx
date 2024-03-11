import { Box, Typography } from "@mui/material";
import "../../css/Contents/Projects.css";
import AlternateTimeline from "../../components/AlternateTimeline";

function Projects() {
  return (
    <Box className="section-container">
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "#fda403",
            fontFamily: "'SBAggroB', sans-serif",
            fontSize: "23pt",
          }}
        >
          PROJECTS
        </Typography>
      </Box>
      <hr className="divider" />
      <Box>
        <Box className="project-pane">
          <AlternateTimeline />
        </Box>
      </Box>
    </Box>
  );
}
export default Projects;
