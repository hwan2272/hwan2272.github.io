import { render, screen } from "@testing-library/react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import MyInfo from "../pages/Contents/MyInfo";
import Contact from "../pages/Contents/Contact";
import Projects from "../pages/Contents/Projects";
import Contents from "../pages/Contents/Contents";
import Welcome from "../pages/Contents/Welcome";
import Navigation from "../pages/Navigation";

test("Layout Element Check : [Header]", () => {
  render(<Header />);
  const headingElement = document.querySelector("h5");
  expect(headingElement).toHaveClass("siteTitle");
});

// test("Layout Element Check : [Navigation]", () => {
//   render(<Navigation />);
//   const divElement = document.querySelector("div");
//   expect(divElement).toHaveClass("navigation");
// });

// test("Layout Element Check : [Contents]", () => {
//   render(<Contents />);
//   const sectionElement = document.querySelector("section");
//   expect(sectionElement).toHaveClass("contentsSection");
// });

test("Layout Element Check : [Contents > Welcome]", () => {
  render(<Welcome />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toHaveClass("welcomeSection");
});

test("Layout Element Check : [Contents > MyInfo]", () => {
  render(<MyInfo />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toHaveClass("myInfoSection");
});

test("Layout Element Check : [Contents > Projects]", () => {
  render(<Projects />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toHaveClass("projectsSection");
});

test("Layout Element Check : [Contents > Contact]", () => {
  render(<Contact />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toHaveClass("contactSection");
});

test("Layout Element Check : [Footer]", () => {
  render(<Footer />);
  const headingElement = document.querySelector("h6");
  expect(headingElement).toHaveClass("siteFooter");
});
