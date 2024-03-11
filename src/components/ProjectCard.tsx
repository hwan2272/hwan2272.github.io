import { Box, Typography } from "@mui/material";
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
      <Box className="project-card-pane">
        <Typography
          sx={{
            color: "#FFBE98",
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
            },
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={contents} />
        </Box>
      </Box>
    </Box>
  );
}
export default ProjectCard;
