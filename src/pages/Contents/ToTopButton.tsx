import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";

function ToTopButton() {
  const [isShow, setIsShow] = useState<Boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, []);

  const checkScroll = () => {
    if (window.scrollY > 500) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  const handleToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isShow && (
      <Box
        sx={{
          position: "fixed",
          right: "5%",
          bottom: "5%",
          textAlign: "center",
          zIndex: 1,
          border: "5px outset goldenrod",
          backgroundColor: "dimgray",
          borderRadius: 2,
        }}
      >
        <IconButton
          onClick={handleToTop}
          disableRipple
          sx={{
            fontFamily: "'Nanum-Gothic', sans-serif",
            fontSize: "11pt",
            color: "beige",
          }}
        >
          <NavigationOutlinedIcon />
          Top
        </IconButton>
      </Box>
    )
  );
}
export default ToTopButton;
