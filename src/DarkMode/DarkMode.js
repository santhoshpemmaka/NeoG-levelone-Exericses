import React from "react";
import "./DarkMode.css";
const DarkMode = () => {
	return (
		<div className='container dark'>
			<div className='image-responsive'>
				<img
					src='https://images.unsplash.com/photo-1444567257257-a10a4088a89d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80%22'
					alt='background=image'
					loading='eager'
				/>
			</div>
			<div className='container-desc'>
				<span>Mode toggle</span>
				<i className='fas fa-moon icon'></i>
				<i className='fas fa-sun icon'></i>
			</div>
		</div>
	);
};

export default DarkMode;
