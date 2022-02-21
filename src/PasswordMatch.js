import React, {useState} from "react";

const PasswordMatch = () => {
	const [passwordText, setpasswordText] = useState("");
	const [retypepasswordText, setretypepassword] = useState("");
	const [displayStatus, setdisplayStatus] = useState();
	const btnHandler = () => {
		if (passwordText == retypepasswordText) {
			setdisplayStatus("Succes");
		} else {
			setdisplayStatus("Error");
		}
	};
	return (
		<div>
			<input
				type='password'
				value={passwordText}
				onChange={(e) => setpasswordText(e.target.value)}
				placeholder='Please enter password'
			/>
			<br />
			<br />
			<input
				type='text'
				value={retypepasswordText}
				onChange={(e) => setretypepassword(e.target.value)}
				placeholder='Please re-type password'
			/>
			<br />
			<br />
			<button onClick={btnHandler}>Submit</button>
			<p>{displayStatus}</p>
		</div>
	);
};

export default PasswordMatch;
