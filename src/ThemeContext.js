import {useContext, createContext, useState} from "react";

const ThemeContext = createContext({theme: "dark"});

const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState("light");
	const themeHandler = () => {
		setTheme((prev) => (prev == "light" ? "dark" : "light"));
	};
	return (
		<ThemeContext.Provider value={{theme, themeHandler}}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export {useTheme, ThemeProvider};
