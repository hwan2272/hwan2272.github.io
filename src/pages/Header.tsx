import { Box, Grid, Typography } from "@mui/material";
import Navigation from "./Navigation";

function Header() {
  return (
    <Box
      className="site-header"
      sx={{
        display: "flex",
        background: "linear-gradient(0deg, rgb(115,86,31) 0%,#9c27b0 100%)",
        color: "beige",
        opacity: 0.8,
        width: "100vw",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={7.5} lg={9.5}>
          <Box>
            <header>
              <a href="/">
                <Typography
                  variant="h5"
                  className="site-title"
                  sx={{
                    color: "#efc443",
                    fontFamily: "'SBAggroB', sans-serif",
                    textDecoration: "none",
                  }}
                >
                  HistoryBook
                </Typography>
              </a>
            </header>
          </Box>
        </Grid>
        <Grid item xs={12} md={4.5} lg={2.5}>
          <Box>
            <Navigation />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Header;
