import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
  it("Header component contains the Holberton logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("holberton logo");
    expect(logo).toBeInTheDocument();
  });

  it("Header component contains the heading h1 element with the correct text", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("School dashboard");
  });
});