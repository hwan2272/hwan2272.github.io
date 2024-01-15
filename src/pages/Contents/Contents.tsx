import { Box } from "@mui/material";
import Contact from "./Contact";
import MyInfo from "./MyInfo";
import Projects from "./Projects";
import Welcome from "./Welcome";
import Stacks from "./Stacks";
import ToTopButton from "./ToTopButton";

function Contents() {
  return (
    <Box className="contents-container" id="contents">
      {/* <Box className="slideShow">
        <Box
          className="slideWrapper"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        > */}
      <Welcome />
      <MyInfo />
      <Projects />
      <Stacks />
      <Contact />
      <ToTopButton />
      {/* </Box>
      </Box> */}
    </Box>
  );
}
export default Contents;
