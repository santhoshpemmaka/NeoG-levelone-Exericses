import React, {useState} from "react";
import ShowToast1 from "./ShowToast1";
import "./ShowToast.css";

const ShowToast = () => {
	const [showToast, setshowToast] = useState(false);
	const clickHandler = () => {
		setTimeout(
			(prev) => {
				setshowToast(prev);
			},
			5000,
			showToast
		);
		setshowToast(!showToast);
	};
	const closeHandler = () => {
		setshowToast((prev) => !prev);
	};
	return (
		<div className='container'>
			<button onClick={() => clickHandler()}>Show Toast</button>
			<ShowToast1
				showToast={showToast}
				message='Succes'
				closeHandler={closeHandler}
			/>
		</div>
	);
};

export default ShowToast;
