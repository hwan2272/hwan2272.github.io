import { Box, Divider, Typography } from "@mui/material";
//import "../../css/Contents/Projects.css";

function Projects() {
  return (
    <section className="projectsSection" id="projects">
      <Box>
        <Box>
          {/* <Typography variant="h4">Park Jeonghwan</Typography>
          <Typography variant="h5">WEB Developer (Frontend/Backend)</Typography> */}
          <Typography
            variant="h5"
            sx={{
              color: "#efc443",
              fontFamily: "'SBAggroB', sans-serif",
            }}
          >
            PROJECTS
          </Typography>
          <hr className="divider" />
          <Typography variant="h5">Comming Soon ...</Typography>
          {/* <a href="{{site.url}}{{site.baseurl}}/#about">Read More</a> */}
        </Box>
      </Box>
    </section>
    // <section id="project">
    //   <div>
    //     <div>
    //       <div>
    //         <p>Projects</p>
    //       </div>
    //       <div>
    //         <div id="project-card">
    //           <a href="{{project.link}}">
    //             <div>
    //               <figure
    //                 style={{ backgroundImage: "url({{project.image}})" }}
    //               ></figure>
    //               <div>
    //                 <h1>{/* {{ project.name }} */}</h1>
    //                 <p>{/* {{ project.description | truncate: 80}} */}</p>
    //               </div>
    //             </div>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
export default Projects;
