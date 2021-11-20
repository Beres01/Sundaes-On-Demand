import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe("Summary Form", () => {
  test("The checkbox is initially unchecked", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    expect(checkbox).not.toBeChecked();
  });

  test("The button is initally disabled", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: /Confirm order/ });
    expect(button).toBeDisabled();
  });

  test("The button is enabled when the checkbox is checked", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    const button = screen.getByRole("button", { name: /Confirm order/ });
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();
  });

  test("The button is disabled when the checkbox is unchecked", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    const button = screen.getByRole("button", { name: /Confirm order/ });
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
});
