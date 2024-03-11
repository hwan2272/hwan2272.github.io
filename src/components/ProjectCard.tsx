import { Box, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface mdFileContents {
  meta: {
    codeKey: string;
    title: string;
    layout: string;
    imageLink: string;
    tags: string;
    period: string;
    description: string;
  };
  contents: string;
}

function ProjectCard(props: mdFileContents) {
  const { meta, contents } = props;

  return (
    <Box>
      <Grid container spacing={1} direction="row" alignItems="center">
        <Grid item xs={12}>
          <Box className="project-card-pane">
            <Typography
              sx={{
                color: "#35374B",
                fontFamily: "'SBAggroB', sans-serif",
                fontSize: "20pt",
                mb: 1,
              }}
            >
              {meta.title}
            </Typography>
            <Box className="project-card-image">
              <figure>
                <img src={meta.imageLink} alt={meta.title} />
                <figcaption>{meta.title}</figcaption>
              </figure>
            </Box>
            <Box
              sx={{
                fontSize: "1rem",
                lineHeight: "1.2rem",
                "& a": {
                  fontWeight: "bold",
                  color: "#5356FF",
                },
                "& strong": {
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                },
              }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]} children={contents} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default ProjectCard;
