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
                color: "#fda403",
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
              <IconButton onClick={onClose}>
                <CloseOutlinedIcon />
              </IconButton>
            </Box>
          </Stack>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box className="project-card-dialog-image">
          <figure>
            <img src={props.meta.imageLink} alt={props.meta.title} />
            <figcaption>{props.meta.title}</figcaption>
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
              color: "#fda403",
            },
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={contents} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
export default ProjectContentsDialog;
