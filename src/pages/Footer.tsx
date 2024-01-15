import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        background: "dimgray",
        textAlign: "center",
        opacity: 0.8,
        width: "100vw",
      }}
    >
      <footer>
        <Typography
          variant="h6"
          className="site-footer"
          sx={{
            fontFamily: "'Pretendard', sans-serif",
          }}
        >
          Copyright ⓒ 2024. hwan2272 All rights reserved.
        </Typography>
      </footer>
    </Box>
  );
}
export default Footer;
