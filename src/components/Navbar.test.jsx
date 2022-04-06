import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar.jsx";

describe("FooterComponent", () => {
  const expectedTitle = "NSD";
  const expectedNav1 = "Home"
  const expectedNav2 = "Work"
  const expectedNav3 = "Projects"


  test("should cntain title in navbar", () => {
    render(<Navbar />);
    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
  });

  test("should contain home in navbar", () => {
    render(<Navbar />);
    expect(screen.getByText(expectedNav1)).toBeInTheDocument();
  });

  test("should contain work in navbar", () => {
    render(<Navbar />);
    expect(screen.getByText(expectedNav2)).toBeInTheDocument();
  });

  test("should contain projects in navbar", () => {
    render(<Navbar />);
    expect(screen.getByText(expectedNav3)).toBeInTheDocument();
  });
});
