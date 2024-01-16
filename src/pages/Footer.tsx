import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          background: "dimgray",
          textAlign: "center",
          opacity: 0.8,
          width: "100vw",
        }}
      >
        <Typography
          variant="h2"
          className="site-footer"
          sx={{
            fontFamily: "'Pretendard', sans-serif",
            fontSize: "15pt",
          }}
        >
          Copyright ⓒ 2024. hwan2272 All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
}
export default Footer;
