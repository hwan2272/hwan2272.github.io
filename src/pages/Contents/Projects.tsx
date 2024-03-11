import { Box, Typography } from "@mui/material";
import "../../css/Contents/Projects.css";
import ProjectMdFileReader from "../../components/ProjectMdFileReader";

function Projects() {
  return (
    <Box className="section-container">
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "#35374B",
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
          <ProjectMdFileReader />
        </Box>
      </Box>
    </Box>
  );
}
export default Projects;
