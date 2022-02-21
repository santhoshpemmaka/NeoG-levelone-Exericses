import React from "react";
import LinkPage from "./LinkPage";

const HeaderPage = () => {
	return (
		<div>
			<LinkPage href='/home'>Home</LinkPage>
			<LinkPage href='/about'>About</LinkPage>
			<LinkPage href='/profile'>Profile</LinkPage>
			<LinkPage href='/'>MainPage</LinkPage>
			<br />

			<a href='/home'> Home Page</a>
			<a href='/about'> About Page</a>
			<a href='/profile'> Profile Page</a>
			<a href='/'>Main page</a>
		</div>
	);
};

export default HeaderPage;
