import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

//const navigate = useNavigate();

function Navigation() {
  return (
    <Box className="navigation" sx={{ display: "flex" }}>
      <ButtonGroup
        color="secondary"
        variant="outlined"
        aria-label="outlined secondary button group"
      >
        <Button
          onClick={() => {
            //navigate("#welcome");
            document.location.href = "#welcome";
          }}
        >
          <Typography
            sx={{
              fontFamily: "'SBAggroB', sans-serif",
              fontSize: "11pt",
            }}
          >
            Welcome
          </Typography>
        </Button>
        <Button
          onClick={() => {
            //navigate("#about");
            document.location.href = "#about";
          }}
        >
          <Typography
            sx={{
              fontFamily: "'SBAggroB', sans-serif",
              fontSize: "11pt",
            }}
          >
            MyInfo
          </Typography>
        </Button>
        <Button
          onClick={() => {
            //navigate("#projects");
            document.location.href = "#projects";
          }}
        >
          <Typography
            sx={{
              fontFamily: "'SBAggroB', sans-serif",
              fontSize: "11pt",
            }}
          >
            Projects
          </Typography>
        </Button>
        <Button
          onClick={() => {
            //navigate("#contact");
            document.location.href = "#contact";
          }}
        >
          <Typography
            sx={{
              fontFamily: "'SBAggroB', sans-serif",
              fontSize: "11pt",
            }}
          >
            Contact
          </Typography>
        </Button>
      </ButtonGroup>
    </Box>
  );
}
export default Navigation;
