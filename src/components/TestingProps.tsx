import TestingPropsChild from "./TestingPropsChild";
import { useState } from "react";

export default function TestingProps() {
	const [text, setText] = useState("");

	return (
		<div>
			<input
				onChange={(e) => {
					setText(e.target.value.toString());
				}}
			/>

			<TestingPropsChild typed={text} />
		</div>
	);
}
