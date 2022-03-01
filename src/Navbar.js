import React from "react";
import {useLangugage} from "./LanguageContext";
import {useTheme} from "./ThemeContext";

const Navbar = () => {
	const {theme, themeHandler} = useTheme();
	const {setLanguage} = useLangugage();
	return (
		<div>
			<button onClick={themeHandler}>ToggleMode</button>
			<button onClick={() => setLanguage("English")}>English</button>
			<button onClick={() => setLanguage("Hindi")}>Hindi</button>
		</div>
	);
};

export default Navbar;
