import React, {useState} from "react";
import "./ShowPassword.css";

const ShowPassword = () => {
	const [valueUsername, setvalueUsername] = useState("");
	const [valuePassword, setvaluePassword] = useState("");
	const [shownPassword, setshownPassword] = useState(false);
	const iconHandler = () => {
		setshownPassword(!shownPassword);
	};
	return (
		<div>
			<div className='form-label'>
				<label className='form-username'>UserName:</label>
				<input
					className='form-input'
					type='text'
					value={valueUsername}
					placeholder='Enter the username'
					onChange={(e) => setvalueUsername(e.target.value)}
				/>
			</div>
			<div className='form-label form-label-password'>
				<label className='form-username'>Password:</label>
				<input
					className='form-input '
					type={shownPassword ? "text" : "password"}
					value={valuePassword}
					placeholder='Enter the PassWord'
					onChange={(e) => setvaluePassword(e.target.value)}
				/>
				{shownPassword ? (
					<i
						class='fas fa-eye-slash'
						style={{
							position: "absolute",
							fontSize: "19px",
							right: "1rem",
							cursor: "pointer",
						}}></i>
				) : (
					<i
						onClick={iconHandler}
						class='fas fa-eye'
						style={{
							position: "absolute",
							fontSize: "19px",
							right: "1rem",
							cursor: "pointer",
						}}></i>
				)}
			</div>
		</div>
	);
};

export default ShowPassword;
