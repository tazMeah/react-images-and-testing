import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Sign Up header is on the page.", () => {
	render(<App />);
	const headerElement = screen.getByText(/Sign Up for our Newsletter/i);
	expect(headerElement).toBeInTheDocument();
});
