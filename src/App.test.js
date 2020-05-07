import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// jest (built into RTL) is our test runner
// Jest functions here:
// - test()
// - expect()
// - toBeInTheDocument() (jest-dom)

// *assertion functions*
// There are TONS of assertion functions you can use to properly test your app

// a test will fail if any function "throws" an error
// if no error is thrown, then the test will pass

test("renders the app header", () => {
  // arrange
  const { getByText } = render(<App />); // render returns an object with a bunch of query functions

  // act
  const header = getByText(/add new animal/i);

  // assert that the header element is being rendered
  expect(header).toBeInTheDocument(); // toBeInTheDocument is called an assertion function
});

test("renders the app header (concise)", () => {
  // arrange
  const { getByText } = render(<App />); // render returns an object with a bunch of query functions

  // act/assert
  getByText(/add new animal/i);

  // assert that the header element is being rendered
  // expect(header).toBeInTheDocument(); // toBeInTheDocument is called an assertion function
});

// commments removed
test("renders the app header (most concise)", () => {
  const { getByText } = render(<App />);
  getByText(/add new animal/i);
});
