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
        background: "linear-gradient(0deg, #ffffffc2, #fff)",
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
                color: "black",
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
