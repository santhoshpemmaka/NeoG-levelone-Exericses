import React, {useState, createContext, useContext} from "react";

const CardContext = createContext({theme: "dark"});

const CardProvider = ({children}) => {
	const [theme, setTheme] = useState("light");

	return (
		<CardContext.Provider value={{theme, setTheme}}>
			{children}
		</CardContext.Provider>
	);
};

const useCard = () => useContext(CardContext);

export {CardProvider, useCard};
