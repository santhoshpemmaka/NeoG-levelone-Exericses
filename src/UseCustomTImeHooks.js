import React, {useState} from "react";

const UseCustomHooks = () => {
	const getCurrentTime = () => {
		let date = new Date();
		return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	};
	let [time, setTime] = useState(getCurrentTime());
	setTimeout(() => {
		setTime(getCurrentTime());
	}, 1000);
	return [time];
};

export default UseCustomHooks;
