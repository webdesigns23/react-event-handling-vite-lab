import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import PasswordInput from "../components/PasswordInput";

let container;

beforeEach(() => {
  container = render(<PasswordInput />).container;
});

test("displays one input", () => {
  const input = container.querySelector("input");
  expect(input).toBeInTheDocument();
  expect(input.tagName).toBe("INPUT");
});

test("displays an input with the right input type", () => {
  const input = container.querySelector("input");
  expect(input.type).toBe("password");
});

test("typing in the input triggers console output", () => {
  console.log = vi.fn();

  const input = container.querySelector("input");
  fireEvent.change(input, { target: { value: "123" } });

  expect(console.log).toHaveBeenCalled();
  expect(console.log.mock.calls[0][0]).toBe("Entering password...");
});
