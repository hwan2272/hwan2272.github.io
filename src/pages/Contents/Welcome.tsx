import { Box, Typography } from "@mui/material";
import "../../css/Contents/Welcome.css";

function Welcome() {
  return (
    <Box className="section-container">
      <Box className="welcome-area">
        <Box>
          <Typography
            className="welcome-text"
            variant="h2"
            sx={{
              fontFamily: "'Nanum-Gothic', sans-serif",
              opacity: 0.5,
            }}
          >
            W E L C O M E
          </Typography>
        </Box>
        <hr className="divider" />
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'SBAggroB', sans-serif",
              fontSize: "20pt",
              color: "#FFBE98",
            }}
          >
            Park Jeonghwan's PortFolio
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;
