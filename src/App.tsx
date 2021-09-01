import React from "react";
import "./App.css";
import { useState } from "react";
import SignUp from "./components/SignUp";
// Option 2 for images
import thankYou from "../src/thankYou.jpeg";
import TestingProps from "./components/TestingProps";
import TestingCallBackProps from "./TestingCallBackProps";

function App() {
	const [signedUp, setSignedUp] = useState(false);

	function onSignUp(email: string) {
		setSignedUp(true);
	}

	return (
		<div className="App">
			{!signedUp ? (
				<div>
					<h1>Sign Up for our Newsletter.</h1>
					<SignUp onSignUp={onSignUp} />
				</div>
			) : (
				<div>
					<h1>Thank you for signing up.</h1>
					{/* Option 1 */}
					{/* Option 2 */}
				</div>
			)}

			{/* *********************** */}
			<h2>Testing Props and DOM</h2>
			<TestingProps />
		</div>
	);
}

export default App;
