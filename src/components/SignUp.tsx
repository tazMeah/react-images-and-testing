import { useState } from "react";
export default function SignUp({
	onSignUp,
}: {
	onSignUp: (email: string) => void;
}) {
	const [emailAddress, setEmailAddress] = useState("");
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				onSignUp(emailAddress);
			}}
		>
			<label htmlFor="email">
				<input
					required
					type="text"
					name="email"
					placeholder="Your Email address"
					onChange={(event) => {
						setEmailAddress(event.target.value);
					}}
				/>
			</label>
			<button>Sign Up</button>
		</form>
	);
}
