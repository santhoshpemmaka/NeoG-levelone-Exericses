import React, {useState} from "react";

const AlphaNumeric = () => {
	const [typePassword, settypePassword] = useState("");
	const [passwordStatus, setpasswordStatus] = useState("");
	const btnHandler = () => {
		let letterNumber = /^[0-9a-zA-Z]+$/;

		if (typePassword.match(letterNumber)) {
			setpasswordStatus("Success");
		} else {
			setpasswordStatus("Password contains atleast one numeric character");
		}
	};
	return (
		<div>
			<input
				type='password'
				value={typePassword}
				onChange={(e) => settypePassword(e.target.value)}
				placeholder='Enter password here'
			/>
			<br />
			<br />
			<button onClick={btnHandler}>Check Password</button>
			<br />
			<p>{passwordStatus}</p>
		</div>
	);
};

export default AlphaNumeric;
