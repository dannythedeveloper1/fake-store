export const allProducts = async () => {
	const data = await fetch("./products.json");
	const response = await data.json();
	console.log(response)
	return response;
};
// allProducts();

export const filteredProducts = async (category) => {
	const products = await allProducts();
	const filteredData = products.filter(
		(product) => product.category === category
	);
	return filteredData;
};

// export const searchProduct = async (searchTerm) => {
//     const products = await allProducts();
    
// };
