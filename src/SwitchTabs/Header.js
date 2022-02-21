import React from "react";
import Link from "./Link";
import "./SwitchTabs.css";
const Header = () => {
	return (
		<div className='container'>
			<Link href='/home'>Home</Link>
			<br />
			<Link href='/about'>About</Link>
			<br />
			<Link href='/profile'>Profile</Link>
			<br />
			<Link href='/alltabs'>Main</Link>
		</div>
	);
};

export default Header;
