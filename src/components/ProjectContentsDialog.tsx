import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface ProjectContentsDialogProps {
  open: boolean;
  meta: {
    title: string;
    layout: string;
    imageLink: string;
    tags: string;
    period: string;
  };
  contents: string;
  onClose: () => void;
}

function ProjectContentsDialog(props: ProjectContentsDialogProps) {
  const { onClose, meta, contents, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="lg"
      PaperProps={{
        style: {
          minHeight: "100vh",
          backgroundColor: "rgb(97,97,97)",
          color: "whitesmoke",
        },
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "#efc443",
                fontFamily: "'SBAggroB', sans-serif",
              }}
            >
              {meta.title}
            </Typography>
          </Box>
          <Stack direction={"row"} spacing={1}>
            {/* <Box
              sx={{
                fontSize: "10pt",
                border: "1px solid blue",
                borderRadius: 2,
                backgroundColor: "#1565c0",
                padding: 1,
              }}
            >
              {meta.tags}
            </Box> */}
            <Box>
              <IconButton
                onClick={onClose}
                sx={{
                  color: "whitesmoke",
                }}
              >
                <CloseOutlinedIcon />
              </IconButton>
            </Box>
          </Stack>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box className="project-card-dialog-image">
          <figure>
            <img src={props.meta.imageLink} alt="Hdms Camel" />
            <figcaption>{props.meta.title}</figcaption>
          </figure>
        </Box>
        <Box sx={{ fontSize: "1rem", lineHeight: "1.2rem" }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={contents} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
export default ProjectContentsDialog;
