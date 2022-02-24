import React, {useEffect, useState} from "react";

const PraticeUseeffect = () => {
	const [counter, setCounter] = useState(0);
	const [userText, setuserText] = useState("");
	useEffect(() => {
		console.log("looking...");
		return () => {
			console.log("cleaningup...");
		};
	}, [counter]);
	const btnHandler = () => {
		setCounter((prev) => prev + 1);
	};
	return (
		<div>
			Counter: {counter}
			<input
				type='text'
				value={userText}
				onChange={(e) => setuserText(e.target.value)}
			/>
			<button onClick={btnHandler}>Add</button>
		</div>
	);
};

export default PraticeUseeffect;
