import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test.skip("renders ScoreBoard text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Score/i);
  expect(linkElement).toBeInTheDocument();
});
