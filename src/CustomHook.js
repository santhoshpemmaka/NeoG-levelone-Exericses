import React from "react";
import UseCustomHooks from "./UseCustomTImeHooks";

const CustomHook = () => {
	const [time] = UseCustomHooks();
	return (
		<div>
			<h1>Current Time: {time}</h1>
		</div>
	);
};

export default CustomHook;
