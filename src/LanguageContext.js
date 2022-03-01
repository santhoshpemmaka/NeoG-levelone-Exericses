import {useContext, createContext, useState} from "react";

const languageContext = createContext();

const LanguageProvider = ({children}) => {
	const [language, setLanguage] = useState("English");
	return (
		<div>
			<languageContext.Provider value={{language, setLanguage}}>
				{children}
			</languageContext.Provider>
		</div>
	);
};

const useLangugage = () => useContext(languageContext);

export {LanguageProvider, useLangugage};
