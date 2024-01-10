// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import MyInfo from "./pages/Contents/MyInfo";
// import Welcome from "./pages/Contents/Welcome";
// import Contact from "./pages/Contents/Contact";
// import Projects from "./pages/Contents/Projects";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
// import LeftMenu from "./pages/LeftMenu";
import Contents from "./pages/Contents/Contents";

function App() {
  return (
    <div className="container">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "left",
        }}
      >
        {/* <LeftMenu /> */}
        <Contents />
      </div>
      <Footer />
    </div>
  );
}

export default App;
