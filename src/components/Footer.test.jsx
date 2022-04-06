import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("FooterComponent", () => {
  const expectedText = "Get in Touch with Me";

  test("should contain given text in footer", () => {
    render(<Footer />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
