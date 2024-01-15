import { render, screen } from "@testing-library/react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Contents from "../pages/Contents/Contents";
import Navigation from "../pages/Navigation";

test("Layout Element Check : [Header] : site-title", () => {
  render(<Header />);
  const headingElement = document.querySelector("h5");
  expect(headingElement).toHaveClass("site-title");
  expect(headingElement).not.toBeNull();
});

test("Layout Element Check : [Navigation] : navigation", () => {
  const { container } = render(<Navigation />);
  const divElements = container.querySelector("div");
  expect(divElements).toHaveClass("navigation");
  expect(divElements).not.toBeNull();
});

test("Layout Element Check : [Contents] : contents-container", () => {
  const { container } = render(<Contents />);
  const divElements = container.querySelector("div");
  expect(divElements).toHaveClass("contents-container");
  expect(divElements).not.toBeNull();
});

test("Layout Element Check : [Footer] : site-footer", () => {
  render(<Footer />);
  const headingElement = document.querySelector("h6");
  expect(headingElement).toHaveClass("site-footer");
  expect(headingElement).not.toBeNull();
});
