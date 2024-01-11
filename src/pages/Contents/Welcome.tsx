import { Box, Typography } from "@mui/material";
import "../../css/Contents/Welcome.css";

function Welcome() {
  return (
    <section className="welcomeSection" id="welcome">
      <Box>
        <Typography variant="h2" className="welcomeTxt">
          W E L C O M E
        </Typography>
        <hr className="divider" />
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
        {/* <a href="{{site.url}}{{site.baseurl}}/#about">Read More</a> */}
      </Box>
    </section>
  );
}

export default Welcome;
