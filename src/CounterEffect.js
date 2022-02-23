import React, {useEffect, useState} from "react";

const CounterEffect = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log("counter display", counter);
	}, [counter]);
	const btnHandler = () => {
		setCounter((prev) => prev + 1);
	};
	return (
		<div style={{fontSize: "1.6rem"}}>
			counter : {counter}
			<br />
			<button onClick={btnHandler}>Increment</button>
		</div>
	);
};

export default CounterEffect;
