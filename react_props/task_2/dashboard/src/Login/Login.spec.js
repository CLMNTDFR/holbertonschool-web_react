import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Login from "./Login";

describe("Login Component", () => {
  it("Login includes 2 label, 2 inputs, and 1 button elements", () => {
    render(<Login />);
    const labels = screen.getAllByLabelText(/Email|Password/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button");

    expect(labels.length).toBe(2);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("inputs elements get focused whenever the related label is clicked", async () => {
    render(<Login />);
    const user = userEvent.setup();
    const emailLabel = screen.getByText("Email");
    const emailInput = screen.getByLabelText("Email");

    await user.click(emailLabel);

    expect(document.activeElement).toBe(emailInput);
  });
});
