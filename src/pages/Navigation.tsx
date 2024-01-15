import { Box, Button, ButtonGroup } from "@mui/material";

function Navigation() {
  return (
    <nav className="navigation">
      <Box sx={{ display: "flex" }}>
        <ButtonGroup
          color="secondary"
          variant="outlined"
          aria-label="outlined secondary button group"
        >
          <Button color="secondary" disableRipple>
            <a className="nav-link-anchor" href="#myinfo">
              introduce
            </a>
          </Button>
          <Button color="secondary" disableRipple>
            <a className="nav-link-anchor" href="#projects">
              projects
            </a>
          </Button>
          <Button color="secondary" disableRipple>
            <a className="nav-link-anchor" href="#stacks">
              stacks
            </a>
          </Button>
          <Button color="secondary" disableRipple>
            <a className="nav-link-anchor" href="#contact">
              contact
            </a>
          </Button>
        </ButtonGroup>
      </Box>
    </nav>
  );
}
export default Navigation;
