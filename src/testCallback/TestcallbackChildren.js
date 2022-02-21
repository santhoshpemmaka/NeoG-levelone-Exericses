import React from "react";

const TestcallbackChildren = ({callbackHandler}) => {
	return (
		<div>
			TestcallbackChildren
			<button onClick={(e) => callbackHandler(e.target.innerText)}>
				call parent
			</button>
		</div>
	);
};

export default TestcallbackChildren;
