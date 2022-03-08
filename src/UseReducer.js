const useReducerFun = (state, action) => {
	switch (action.type) {
		case "SORT":
			return {
				...state,
				sortBy: action.payload,
			};
		case "TOGGLE_INVENTORY":
			return {
				...state,
				showInventoryAll: !state.showInventoryAll,
			};
		case "TOGGLE_DELIVERY": {
			return {
				...state,
				showFastDeliveryOnly: !state.showFastDeliveryOnly,
			};
		}
		case "PRICE": {
			return {
				...state,
				price: action.payload,
			};
		}
		case "RESET": {
			return {
				...state,
				sortBy: null,
				showInventoryAll: true,
				showFastDeliveryOnly: false,
				price: 0,
			};
		}
		case "CARD": {
			return {
				...state,
				carditems: [...state.carditems, action.payload],
			};
		}
		default: {
			return state;
		}
	}
};
export default useReducerFun;
