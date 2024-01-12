import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        background: "rgba(97,97,97,0.9)",
        color: "beige",
        textAlign: "center",
        opacity: 0.8,
        width: "100vw",
      }}
    >
      <Typography
        variant="h6"
        className="site-footer"
        sx={{
          fontFamily: "'Pretendard', sans-serif",
        }}
      >
        Copyright ⓒ 2024. hwan2272 All rights reserved.
      </Typography>
    </Box>
  );
}
export default Footer;
