import React, {useState} from "react";

const Button = () => {
	const [displayCount, setdisplayCount] = useState(0);
	const [bgColor, setbgColor] = useState(false);
	const btnHandler = (e) => {
		e.preventDefault();
		const operator = e.target.innerText;
		let resultCount = displayCount;
		if (operator == "+") {
			setdisplayCount(displayCount + 1);
		} else if (operator == "-" && displayCount > 0) {
			setdisplayCount(displayCount - 1);
		}
		// setdisplayCount(resultCount);
	};
	const toggleHandler = () => {
		setbgColor(!bgColor);
	};

	return (
		<div style={{margin: "3rem"}}>
			<h1>Display Counter</h1>
			<button onClick={(e) => btnHandler(e)}>+</button>
			<span style={{margin: "1rem"}}>{displayCount}</span>
			<button onClick={(e) => btnHandler(e)}>-</button>
			<h3 style={{backgroundColor: bgColor ? "transparent" : "red"}}>
				NeoG Think React
			</h3>
			<button onClick={toggleHandler}>toggle Color</button>
		</div>
	);
};

export default Button;
