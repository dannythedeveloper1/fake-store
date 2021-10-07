import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux";
import ProductCard from "./ProductCard";

const Products = () => {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const styles = {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
	};

	return (
		<div style={styles}>
			{products.map((product) => (
				<div style={{ margin: "10px" }} key={product.id}>
					<ProductCard
						title={product.title}
						image={product.image}
						price={product.price}
					/>
				</div>
			))}
		</div>
	);
};

export default Products;
