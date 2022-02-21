import React from "react";

const ShowToast1 = ({showToast, closeHandler, message}) => {
	return (
		<label style={{display: showToast ? "flex" : "none"}}>
			{message} <i onClick={closeHandler} className='fas fa-times icon'></i>
		</label>
	);
};

export default ShowToast1;
