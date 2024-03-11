import { Box, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import ProjectContentsDialog from "./ProjectContentsDialog";
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
    serviceToNumber: string;
    unit: string;
  };
  contents: string;
}

function TimelineContentProjectCard(props: mdFileContents) {
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
      <Box className="project-card-pane" onClick={handleOpenContentsDialog}>
        <Grid container spacing={1} direction="row" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box className="project-card-image">
              <figure>
                <img src={meta.imageLink} alt={meta.title} />
                <figcaption>{meta.title}</figcaption>
              </figure>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className="project-card-details-pane">
              <Typography
                sx={{
                  color: "#fda403",
                  fontFamily: "'SBAggroB', sans-serif",
                  fontSize: "13pt",
                }}
              >
                {meta.title}
              </Typography>
              <Box
                sx={{
                  fontSize: "10pt",
                  lineHeight: "1rem",
                }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  children={"### " + meta.description}
                />
                <p>
                  <span
                    style={{
                      color: "#e8751a",
                      fontFamily: "'SBAggroB', sans-serif",
                      fontSize: "12pt",
                    }}
                  >
                    {meta.serviceToNumber}
                  </span>
                  &nbsp;
                  {meta.unit}
                </p>
                <Typography>...[ 클릭하여 상세보기 ]</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="project-card-subtext">{meta.period}</Box>
      <ProjectContentsDialog
        meta={meta}
        contents={contents}
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}
export default TimelineContentProjectCard;
