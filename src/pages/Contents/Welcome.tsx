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
              color: "rgb(211 206 190)",
              fontFamily: "'SBAggroB', sans-serif",
              fontSize: "13pt",
              fontWeight: "0",
            }}
          >
            -환영합니다. 스크롤을 움직이시거나, 상단 메뉴를 클릭하여 주세요.-
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;
