import React from "react";
import TestcallbackChildren from "./TestcallbackChildren";

const TestcallbackParent = () => {
	const callbackHandler = (name) => {
		console.log("calling from parent", name);
	};
	return (
		<div>
			<h1>Praent function</h1>
			<TestcallbackChildren callbackHandler={callbackHandler} />
		</div>
	);
};

export default TestcallbackParent;
