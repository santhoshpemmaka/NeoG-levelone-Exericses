import React, {useState} from "react";

const DisableSubmit = () => {
	const [passwordText, setpasswordText] = useState("");
	const [retypepasswordText, setretypepassword] = useState("");
	const btnHandler = () => {
		console.log(passwordText);
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
			<button
				onClick={btnHandler}
				disabled={
					passwordText.length > 1 && passwordText == retypepasswordText
						? false
						: true
				}>
				Submit
			</button>
			<p>{displayStatus}</p>
		</div>
	);
};

export default DisableSubmit;
