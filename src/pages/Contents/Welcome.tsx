import { Box, Typography } from "@mui/material";
import "../../css/Contents/Welcome.css";

function Welcome() {
  return (
    <Box className="section-container">
      <Box className="welcome-area">
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'SBAggroB', sans-serif",
              fontSize: "23pt",
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
              color: "#efc443",
              fontFamily: "'SBAggroB', sans-serif",
              fontSize: "20pt",
            }}
          >
            -Park Jeonghwan-
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Pretendard', sans-serif",
              fontSize: "20pt",
            }}
          >
            WEB Developer (Frontend/Backend)
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Pretendard', sans-serif",
              fontSize: "20pt",
            }}
          >
            반응형 작업중...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;
