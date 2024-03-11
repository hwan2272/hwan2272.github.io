import { Box, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const handleOpenContentsDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Grid container spacing={1} direction="row" alignItems="center">
        <Grid item xs={12}>
          <Box className="project-card-pane">
            <Typography
              sx={{
                color: "dimgray",
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
                fontSize: "0.8rem",
                lineHeight: "1rem",
                "& a": {
                  fontWeight: "bold",
                  color: "#5356FF",
                },
                "& strong": {
                  fontWeight: "bold",
                  fontSize: "1rem",
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
