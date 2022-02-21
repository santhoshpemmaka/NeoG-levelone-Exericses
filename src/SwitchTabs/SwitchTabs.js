import React from "react";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Route from "./Route";
import Header from "./Header";

const SwitchTabs = () => {
	return (
		<div>
			<Header />
			<Route path='/home'>
				<Home />
			</Route>
			<Route path='/about'>
				<About />
			</Route>
			<Route path='/profile'>
				<Profile />
			</Route>
			<Route path='/alltabs'>
				<h1>Switch Tabs</h1>
			</Route>
		</div>
	);
};

export default SwitchTabs;

// const homePageHandler = () => {
//     if (window.location.pathname == "/home") {
//         return <Home />;
//     }
// };
// const aboutPageHandler = () => {
//     if (window.location.pathname == "/about") {
//         return <About />;
//     }
// };
// const profilePageHandler = () => {
//     if (window.location.pathname == "/profile") {
//         return <Profile />;
//     }
// };
