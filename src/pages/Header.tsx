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
        margin: "0 auto",
      }}
    >
      {/* <Grid container>
        <Grid item xs={12} md={7.5} lg={9.5}> */}
      <header>
        <Box>
          <Typography
            variant="h1"
            className="site-title"
            sx={{ fontFamily: "'SBAggroB', sans-serif", fontSize: "25pt" }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#efc443",
              }}
            >
              HistoryBook
            </a>
          </Typography>
        </Box>
      </header>
      {/* </Grid>
        <Grid item xs={12} md={4.5} lg={2.5}> */}
      <nav className="navigation">
        <Box>
          <Navigation />
        </Box>
      </nav>
      {/* </Grid>
      </Grid> */}
    </Box>
  );
}
export default Header;
