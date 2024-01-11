import { Box } from "@mui/material";
import Contact from "./Contact";
import MyInfo from "./MyInfo";
import Projects from "./Projects";
import Welcome from "./Welcome";

function Contents() {
  return (
    <Box className="contentsSection" id="contents">
      <Box className="slideShow">
        <Box
          className="slideWrapper"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Welcome />
          <MyInfo />
          <Projects />
          <Contact />
        </Box>
      </Box>
    </Box>
  );
}
export default Contents;
