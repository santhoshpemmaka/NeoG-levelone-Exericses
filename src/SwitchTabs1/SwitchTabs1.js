import React from "react";
import RoutePage from "./RoutePage";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProfilePage from "./ProfilePage";
import HeaderPage from "./HeaderPage";

const SwitchTabs1 = () => {
	return (
		<div>
			<HeaderPage />
			<RoutePage pathName='/home'>
				<HomePage />
			</RoutePage>
			<RoutePage pathName='/about'>
				<AboutPage />
			</RoutePage>
			<RoutePage pathName='/profile'>
				<ProfilePage />
			</RoutePage>
			<RoutePage pathName='/'>
				<HomePage />
				<AboutPage />
				<ProfilePage />
			</RoutePage>
		</div>
	);
};

export default SwitchTabs1;
