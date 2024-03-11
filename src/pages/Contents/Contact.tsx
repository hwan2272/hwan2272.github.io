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
          CONTACT
        </Typography>
      </Box>
      <hr className="divider" />
      <Box className="contact-pane">
        <Typography>Github : https://github.com/hwan2272</Typography>
        <Typography>Email : hwan2272@gmail.com</Typography>
        <Typography>Email2 : hwan2230@naver.com</Typography>
      </Box>
    </Box>
  );
}
export default Contact;
