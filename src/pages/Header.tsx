import { Box, Typography } from "@mui/material";
import Navigation from "./Navigation";

function Header() {
  return (
    <Box
      className="site-header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(0deg, rgb(115,86,31) 0%,#9c27b0 100%)",
        color: "beige",
        opacity: 0.8,
        width: "100vw",
      }}
    >
      <a href="/">
        <Typography
          variant="h5"
          className="site-title"
          sx={{
            color: "#efc443",
            fontFamily: "'SBAggroB', sans-serif",
          }}
        >
          HistoryBook
        </Typography>
      </a>
      <Navigation />
    </Box>
  );
}
export default Header;
