import React from "react";
import { render, screen } from "@testing-library/react";
// import TestingProps from "./TestingProps";
import App from "../App";
import TestingPropsChild from "./TestingPropsChild";

test("Testing Props is on the page", () => {
	render(<App />);
	const testingPropsHeader = screen.getByText(/testing props/i);
	expect(testingPropsHeader).toBeInTheDocument();
});

test("Testing if typing 'bologna' will display 'bologna' on the page.", () => {
	render(<TestingPropsChild typed="bologna" />);
	const ourTypedElement = screen.getByText("bologna");
	expect(ourTypedElement).toBeInTheDocument();
});
