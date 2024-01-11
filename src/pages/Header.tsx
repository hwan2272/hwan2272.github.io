import { Box, Typography } from "@mui/material";
import Navigation from "./Navigation";

function Header() {
  return (
    <Box
      className="siteHeader"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(0deg, rgb(115,86,31) 0%,#9c27b0 100%)",
        color: "whitesmoke",
        opacity: 0.8,
        width: "100vw",
      }}
    >
      <Typography
        variant="h5"
        className="siteTitle"
        sx={{
          color: "#efc443",
          fontFamily: "'SBAggroB', sans-serif",
        }}
      >
        HistoryBook
      </Typography>
      <Navigation />
    </Box>
  );
}
export default Header;
