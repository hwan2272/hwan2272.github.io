import { render, screen } from "@testing-library/react";
import Welcome from "../../pages/Contents/Welcome";

test("Layout Element Check Detail : [Contents > Welcome] : welcomeSection", () => {
  render(<Welcome />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toHaveClass("welcomeSection");
  expect(sectionElement).not.toBeNull();
});
