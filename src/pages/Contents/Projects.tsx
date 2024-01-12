import { Box, Typography } from "@mui/material";
import "../../css/Contents/Projects.css";
import AlternateTimeline from "../../components/AlternateTimeline";

function Projects() {
  return (
    <section className="projectsSection" id="projects">
      <Box className="section-container">
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "#efc443",
              fontFamily: "'SBAggroB', sans-serif",
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
    </section>
  );
}
export default Projects;
