import { Box, Typography } from "@mui/material";
import "../../css/Contents/Welcome.css";

function Welcome() {
  return (
    <section className="welcomeSection" id="welcome">
      <Box className="section-container">
        <Box>
          <Typography variant="h3" className="welcomeTxt">
            W E L C O M E
          </Typography>
        </Box>
        <hr className="divider" />
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "#efc443",
              fontFamily: "'SBAggroB', sans-serif",
            }}
          >
            -Park Jeonghwan-
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Pretendard', sans-serif",
            }}
          >
            WEB Developer (Frontend/Backend)
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Pretendard', sans-serif",
            }}
          >
            반응형 작업중...
          </Typography>
        </Box>
      </Box>
    </section>
  );
}

export default Welcome;
