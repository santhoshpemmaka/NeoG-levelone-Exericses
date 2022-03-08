import React, {createContext, useContext, useReducer} from "react";
import useReducerFun from "./UseReducer";

const CardContext = createContext(null);

const CardProvider = ({children}) => {
	const [state, dispatch] = useReducer(useReducerFun, {
		sortBy: null,
		showInventoryAll: true,
		showFastDeliveryOnly: false,
		carditems: [],
		price: 0,
	});
	return (
		<CardContext.Provider value={{state, dispatch}}>
			{children}
		</CardContext.Provider>
	);
};

const useCard = () => useContext(CardContext);

export {CardProvider, useCard};
