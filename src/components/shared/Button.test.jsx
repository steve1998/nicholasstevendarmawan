import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("ButtonComponent", () => {
  const expectedLink = "https://www.test.com/";
  const expectedText = "Test Text";

  test("should contain given text in button", () => {
    render(<Button link={expectedLink} text={expectedText} />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(expectedText).href).toBe(expectedLink);
  });
});
