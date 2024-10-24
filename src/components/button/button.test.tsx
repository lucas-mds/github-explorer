import { render, screen } from "@testing-library/react";
import Button, { ButtonProps } from "./button";

describe("<Button />", () => {
  const renderButton = (props: ButtonProps) => {
    render(<Button {...props} />);
  };

  describe("when passing the isLoading as true", () => {
    it("should have a loading icon", () => {
      renderButton({ isLoading: true, loadingIconTestID: "loading-icon" });

      expect(screen.getByTestId("loading-icon")).toBeDefined();
    });
  });

  it("should render button with text", () => {
    renderButton({ children: "Click me" });

    expect(screen.getByText("Click me")).toBeDefined();
  });
});
