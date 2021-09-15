export const allProducts = () => {
	const data = fetch("./products.json")
		.then((res) => res.json)
		.then((res) => res.data);
	return data;
	// console.log(products);
};
