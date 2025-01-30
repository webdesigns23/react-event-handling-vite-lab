import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SubmitButton from "../components/SubmitButton";

beforeEach(() => {
  render(<SubmitButton />);
});

test('displays a button with the text "Submit Password"', () => {
  expect(screen.queryByText(/Submit Password/)).toBeInTheDocument();
});

test("hovering over the button triggers console output", () => {
  console.log = vi.fn();

  const button = screen.queryByText(/Submit Password/);
  fireEvent.mouseEnter(button);

  expect(console.log).toHaveBeenCalled();
  expect(console.log.mock.calls[0][0]).toBe("Mouse Entering");
});

test("removing mouse from the button triggers console output", () => {
  console.log = vi.fn();

  const button = screen.queryByText(/Submit Password/);
  fireEvent.mouseLeave(button);

  expect(console.log).toHaveBeenCalled();
  expect(console.log.mock.calls[0][0]).toBe("Mouse Exiting");
});
