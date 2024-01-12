import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contents/Contact";

test("Layout Element Check Detail : [Contents > Contact]", () => {
  render(<Contact />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toHaveClass("contactSection");
  expect(sectionElement).not.toBeNull();
});
