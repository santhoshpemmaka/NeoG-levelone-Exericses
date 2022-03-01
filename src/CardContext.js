import {useContext, createContext, useState} from "react";

const CardContext = createContext({items: 0});

const CardProvider = ({children}) => {
	const [itemCount, setitemCount] = useState(0);
	const countHandler = () => {
		setitemCount((prev) => prev + 1);
	};
	return (
		<CardContext.Provider value={{itemCount, countHandler}}>
			{children}
		</CardContext.Provider>
	);
};
const useCard = () => useContext(CardContext);

export {useCard, CardProvider};
