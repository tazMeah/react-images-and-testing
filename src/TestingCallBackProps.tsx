export default function TestingCallBackProps() {
	function doSomeStuff() {
		console.log("stuff was done.");
	}
	return (
		<div>
			<button
				role="button"
				aria-label="clickMe"
				onClick={() => {
					doSomeStuff();
				}}
			>
				CLICK ME
			</button>
		</div>
	);
}
