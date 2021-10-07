import axios from "axios";
import {
	FETCH_PRODUCTS_FAILURE,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
} from "./productTypes";

export const fetchProductsRequest = () => {
	return {
		type: FETCH_PRODUCTS_REQUEST,
	};
};

export const fetchProductsSuccess = (products) => {
	return {
		type: FETCH_PRODUCTS_SUCCESS,
		payload: products,
	};
};

export const fetchProductsFailure = (error) => {
	return {
		type: FETCH_PRODUCTS_FAILURE,
		payload: error,
	};
};

export const fetchProducts = () => {
	return (dispatch) => {
		dispatch(fetchProductsRequest());
		axios
			.get("./products.json")
			.then((res) => dispatch(fetchProductsSuccess(res.data)))
			.catch((error) => dispatch(fetchProductsFailure(error.message)));
	};
};

export const searchProducts = (category) => {
	return (dispatch) => {
		dispatch(fetchProductsRequest());
		axios
			.get("./products.json")
			.then((res) => {
				const filteredData = res.data.filter(
					(product) => product.category === category
				);
				dispatch(fetchProductsSuccess(filteredData));
			})
			.catch((error) => dispatch(fetchProductsFailure(error.message)));
	};
};
