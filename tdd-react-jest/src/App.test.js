import { render, fireEvent } from "@testing-library/react";

import App from "./App";

test("renders buttons", () => {
  const { getByRole } = render(<App />);

  const addBtn = getByRole("button", { name: "add" });
  const subtractBtn = getByRole("button", { name: "subtract" });

  expect(addBtn).toBeInTheDocument();
  expect(subtractBtn).toBeInTheDocument();
});

test("renders inputs", () => {
  const { getByTestId } = render(<App />);

  const inputA = getByTestId("a");
  const inputB = getByTestId("b");

  expect(inputA).toBeInTheDocument();
  expect(inputB).toBeInTheDocument();
});

test("renders result labels", () => {
  const { getByTestId } = render(<App />);

  const valueA = getByTestId("valueA");
  const valueB = getByTestId("valueB");
  const equation = getByTestId("equation");
  const result = getByTestId("result");

  expect(valueA).toBeInTheDocument();
  expect(valueB).toBeInTheDocument();
  expect(equation).toBeInTheDocument();
  expect(result).toBeInTheDocument();
});

test("save and display values", () => {
  const { getByTestId } = render(<App />);

  const inputA = getByTestId("a");
  const inputB = getByTestId("b");

  expect(inputA).toBeInTheDocument();
  expect(inputB).toBeInTheDocument();

  fireEvent.change(inputA, { target: { value: "1" } });
  fireEvent.change(inputB, { target: { value: "2" } });

  const valueA = getByTestId("valueA").textContent;
  const valueB = getByTestId("valueB").textContent;

  expect(valueA).toBe("1");
  expect(valueB).toBe("2");
});

test("add a with b when button add is clicked", () => {
  const { getByTestId, getByRole } = render(<App />);

  const inputA = getByTestId("a");
  const inputB = getByTestId("b");
  const equation = getByTestId("equation");
  const result = getByTestId("result");
  const addBtn = getByRole("button", { name: "add" });

  expect(equation.textContent).toBe("?");
  expect(result.textContent).toBe("0");

  fireEvent.change(inputA, { target: { value: "1" } });
  fireEvent.change(inputB, { target: { value: "2" } });

  fireEvent.click(addBtn);

  expect(equation.textContent).toBe("+");
  expect(result.textContent).toBe("3");
});

test("subtract a with b when button subtract is clicked", () => {
  const { getByTestId, getByRole } = render(<App />);

  const inputA = getByTestId("a");
  const inputB = getByTestId("b");
  const equation = getByTestId("equation");
  const result = getByTestId("result");
  const subtractBtn = getByRole("button", { name: "subtract" });

  expect(equation.textContent).toBe("?");
  expect(result.textContent).toBe("0");

  fireEvent.change(inputA, { target: { value: "1" } });
  fireEvent.change(inputB, { target: { value: "2" } });

  fireEvent.click(subtractBtn);

  expect(equation.textContent).toBe("-");
  expect(result.textContent).toBe("-1");
});
