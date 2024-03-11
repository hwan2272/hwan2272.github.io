import { Box } from "@mui/material";
import Contact from "./Contact";
import MyInfo from "./MyInfo";
import Projects from "./Projects";
import Stacks from "./Stacks";
import ToTopButton from "./ToTopButton";
import Welcome from "./Welcome";

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
      <section className="welcomeSection" id="welcome">
        <Welcome />
      </section>
      <section className="myInfoSection" id="myinfo">
        <MyInfo />
      </section>
      <section className="stacksSection" id="stacks">
        <Stacks />
      </section>
      <section className="projectsSection" id="projects">
        <Projects />
      </section>
      <section className="contactSection" id="contact">
        <Contact />
      </section>
      <ToTopButton />
      {/* </Box>
      </Box> */}
    </Box>
  );
}
export default Contents;
