import {
	FETCH_PRODUCTS_FAILURE,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
} from "./productTypes";

const initialState = {
	loading: false,
	products: [],
	error: "",
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
			};
		case FETCH_PRODUCTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export default productReducer;
