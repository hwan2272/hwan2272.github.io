import { Box, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import ProjectContentsDialog from "./ProjectContentsDialog";
import { useState } from "react";
import remarkGfm from "remark-gfm";

interface mdFileContents {
  meta: {
    title: string;
    layout: string;
    imageLink: string;
    tags: string;
    period: string;
  };
  contents: string;
}

function TimelineContentProjectCard(props: mdFileContents) {
  const [open, setOpen] = useState(false);

  const handleOpenContentsDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box className="project-card-pane" onClick={handleOpenContentsDialog}>
        <Grid container spacing={1} direction="row" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box className="project-card-image">
              <figure>
                <img src={props.meta.imageLink} alt="Hdms Camel" />
                <figcaption>{props.meta.title}</figcaption>
              </figure>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className="project-card-details-pane">
              <Typography
                variant="caption"
                sx={{
                  color: "#efc443",
                  fontFamily: "'SBAggroB', sans-serif",
                  fontSize: "13pt",
                }}
              >
                {props.meta.title}
              </Typography>
              <Box sx={{ fontSize: "10pt", lineHeight: "1rem" }}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  children={props.contents.substring(0, 100) + "... [more]"}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="project-card-subtext">{props.meta.period}</Box>
      <ProjectContentsDialog
        meta={props.meta}
        contents={props.contents}
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}
export default TimelineContentProjectCard;
