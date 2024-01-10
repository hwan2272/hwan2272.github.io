import Contact from "./Contact";
import MyInfo from "./MyInfo";
import Projects from "./Projects";
import Welcome from "./Welcome";

function Contents() {
  return (
    <div className="slideShow">
      <div
        className="slideWrapper"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Welcome />
        <MyInfo />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
export default Contents;
