import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cartTypes";

const initialState = {
	items: [],
	quantity: 0,
};
const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				items: action.payload == null ? state.items : action.payload,
				quantity: state.quantity + 1,
			};
		case REMOVE_PRODUCT:
			return {
				items: action.payload,
				quantity: state.quantity - 1,
			};
		default:
			return state;
	}
};

export default cartReducer;
