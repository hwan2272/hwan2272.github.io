import { Box, Typography } from "@mui/material";
import "../../css/Contents/Contact.css";

function Contact() {
  return (
    <Box className="section-container">
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "#35374B",
            fontFamily: "'SBAggroB', sans-serif",
            fontSize: "23pt",
          }}
        >
          CONTACT & ETC
        </Typography>
      </Box>
      <hr className="divider" />
      <Box className="contact-pane">
        <Typography>교육 수료내역</Typography>
        <Box>
          <Typography>
            [2022.12 ~ 2023.02] : 웹표준 & 웹접근성(HTML,CSS) 코딩 기초부터
            실무테크닉
          </Typography>
          <Typography>
            [2016.04 ~ 2016.04] : 전자정부 표준프레임워크 및 공통컴포넌트 개발자
            실무과정(2016년 3차)
          </Typography>
          <Typography>
            [2012.08 ~ 2012.11] : HTML5 기반의 Java와 JQuery 개발자 과정
          </Typography>
        </Box>
      </Box>
      <hr className="divider" />
      <Box className="contact-pane">
        <Typography>자격증</Typography>
        <Box>
          <Typography>[2012.09] : OCJP 6.0</Typography>
        </Box>
      </Box>
      <hr className="divider" />
      <Box className="contact-pane">
        <Typography>연락처</Typography>
        <Box>
          <Typography>Github : https://github.com/hwan2272</Typography>
          <Typography>Email : hwan2272@gmail.com</Typography>
          <Typography>Email2 : hwan2230@naver.com</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Contact;
