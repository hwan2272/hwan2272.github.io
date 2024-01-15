import { Box, Typography } from "@mui/material";
import "../../css/Contents/Contact.css";

function Contact() {
  return (
    <section className="contactSection" id="contact">
      <Box className="section-container">
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "#efc443",
              fontFamily: "'SBAggroB', sans-serif",
            }}
          >
            CONTACT
          </Typography>
        </Box>
        <hr className="divider" />
        <Box className="contact-pane">
          <Box
            sx={{
              border: "2px groove orange",
              borderRadius: 2,
              padding: 2,
              backgroundColor: "dimgray",
            }}
          >
            <Typography>Github : https://github.com/hwan2272</Typography>
            <Typography>Email : hwan2272@gmail.com</Typography>
            <Typography>Email2 : hwan2230@naver.com</Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
export default Contact;
