import React, {useState} from "react";

const FunctionalUsestate = () => {
	const [countNumber, setcountNumber] = useState(0);
	const normalHandler = () => {
		setcountNumber(countNumber + 1);
	};
	const asynnormalHandler = async () => {
		await wait({seconds: 6000});
		setcountNumber(countNumber + 1);
	};
	const asynfuntionalHandler = async () => {
		await wait({seconds: 6000});
		setcountNumber((_prev) => _prev + 1);
	};
	return (
		<div>
			counter : {countNumber}
			<br />
			<button onClick={normalHandler}>normal Update</button>
			<button onClick={asynnormalHandler}>Asyn normal update</button>
			<button onClick={asynfuntionalHandler}>Asyn functional update</button>
		</div>
	);
};

export default FunctionalUsestate;

const wait = ({seconds}) => {
	return new Promise((res, rej) => setTimeout(res, seconds));
};

// const [counter, setCounter] = useState(0);
// const directHandler = () => {
//     setCounter(counter + 1);
//     setCounter(counter + 1);
// };
// const functionalHandler = () => {
//     setCounter((prev) => prev + 1);
//     setCounter((prev) => prev + 1);
// };
// return (
//     <div>
//         counter : {counter}
//         <button onClick={directHandler}>directUpdate</button>
//         <button onClick={functionalHandler}>functionalUpdate</button>
//     </div>
// );
