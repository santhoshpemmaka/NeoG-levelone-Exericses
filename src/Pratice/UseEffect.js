import React, {useEffect, useState} from "react";

const UseEffect = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log(counter);
	}, [counter]);
	const btnHandler = () => {
		setCounter((prev) => prev + 1);
	};
	return (
		<div>
			{counter}
			<button onClick={btnHandler}>Incerement</button>
		</div>
	);
};

export default UseEffect;
