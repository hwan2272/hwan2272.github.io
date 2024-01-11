import "./css/App.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
// import LeftMenu from "./pages/LeftMenu";
import Contents from "./pages/Contents/Contents";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="container">
      <Header />
      {/* <LeftMenu /> */}
      <Contents />
      <Footer />
    </Box>
  );
}

export default App;
