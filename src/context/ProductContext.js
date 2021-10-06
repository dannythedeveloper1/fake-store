import React, { createContext, useEffect, useState } from "react";
import { allProducts } from "../utils/utils";
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await allProducts();
			// console.log(response);
			setProducts(response);
		})();
	}, []);

	return (
		<ProductContext.Provider value={[products, setProducts]}>
			{children}
		</ProductContext.Provider>
	);
};
