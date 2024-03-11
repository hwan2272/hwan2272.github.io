import { render, screen } from "@testing-library/react";
import Projects from "../../pages/Contents/Projects";

test("Layout Element Check Detail : [Contents > Projects] : projectsSection", () => {
  render(<Projects />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toHaveClass("projectsSection");
  expect(sectionElement).not.toBeNull();
});

test("Layout Element Check Detail : [Contents > Projects] : projectsSection > project-pane", () => {
  const { container } = render(<Projects />);
  const targetElement = container.querySelector(
    ".projectsSection .project-pane"
  );
  expect(targetElement).not.toBeNull();
});

test("Layout Element Check Detail : [Contents > Projects] : projectsSection > project-pane > project-card-pane", () => {
  const { container } = render(<Projects />);
  const targetElement = container.querySelector(
    ".projectsSection .project-pane .project-card-pane"
  );
  expect(targetElement).not.toBeNull();
});

test("Layout Element Check Detail : [Contents > Projects] : projectsSection > project-pane > project-card-pane > project-card-image", () => {
  const { container } = render(<Projects />);
  const targetElement = container.querySelector(
    ".projectsSection .project-pane .project-card-pane .project-card-image"
  );
  expect(targetElement).not.toBeNull();
});
