import { render, screen } from "@testing-library/react";
import MyInfo from "../../pages/Contents/MyInfo";

test("Layout Element Check Detail : [Contents > MyInfo] : myInfoSection", () => {
  render(<MyInfo />);
  const sectionElement = document.querySelector("section");
  expect(sectionElement).toHaveClass("myInfoSection");
  expect(sectionElement).not.toBeNull();
});

test("Layout Element Check Detail : [Contents > MyInfo] : myInfoSection > myinfo-image", () => {
  const { container } = render(<MyInfo />);
  const targetElement = container.querySelector(".myInfoSection .myinfo-image");
  expect(targetElement).not.toBeNull();
});

test("Layout Element Check Detail : [Contents > MyInfo] : myInfoSection > myinfo-title-pane", () => {
  const { container } = render(<MyInfo />);
  const targetElement = container.querySelector(
    ".myInfoSection .myinfo-title-pane"
  );
  expect(targetElement).not.toBeNull();
});

test("Layout Element Check Detail : [Contents > MyInfo] : myInfoSection > myinfo-pane", () => {
  const { container } = render(<MyInfo />);
  const targetElement = container.querySelector(".myInfoSection .myinfo-pane");
  expect(targetElement).not.toBeNull();
});

test("Layout Element Check Detail : [Contents > MyInfo] : myInfoSection > myhistory-pane", () => {
  const { container } = render(<MyInfo />);
  const targetElement = container.querySelector(
    ".myInfoSection .myhistory-pane"
  );
  expect(targetElement).not.toBeNull();
});
