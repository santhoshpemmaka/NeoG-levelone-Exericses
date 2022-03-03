import React from "react";
import "./App.css";
import {useCard} from "./Context/CardContext";
const App = () => {
	const {theme, setTheme} = useCard();
	const changeHandler = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};
	console.log(theme == "light");
	return (
		<div>
			<div
				className={
					"container " + (theme == "light" ? "panel-light" : "panel-dark")
				}>
				<h1>Welcome </h1>
				<div>
					<button
						className={
							"button " + (theme == "light" ? "button-light" : "button-dark")
						}>
						Sign up
					</button>
					<button
						className={
							"button " + (theme == "light" ? "button-light" : "button-dark")
						}>
						Log in{" "}
					</button>
				</div>
			</div>
			<input type='checkbox' onChange={changeHandler} />
			<span>Use dark mode</span>
		</div>
	);
};

export default App;
