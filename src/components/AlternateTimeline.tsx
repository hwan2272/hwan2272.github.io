import Timeline from "@mui/lab/Timeline";
import ProjectMdFileReader from "./ProjectMdFileReader";

function AlternateTimeline() {
  return (
    <Timeline position="alternate">
      <ProjectMdFileReader />
    </Timeline>
  );
}
export default AlternateTimeline;
