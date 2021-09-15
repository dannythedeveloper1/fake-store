import React, { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();
export const ProductProvider = (props) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("./products.json")
			.then((res) => res.json)
			.then((res) => setProducts(res));
            // console.log(products);
    }, []);
	return <ProductContext.Provider value={[products,setProducts]}>{props.children}</ProductContext.Provider>;
};
