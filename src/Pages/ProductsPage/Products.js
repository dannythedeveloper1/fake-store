import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux";
import ProductCard from "./ProductCard";

const Products = (props) => {
	useEffect(() => {
		props.fetchProducts();
	}, []);

	const styles = {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
	};

	return (
		<div style={styles}>
			{props.products.map((product) => (
				<div style={{ margin: "10px" }} key={product.id}>
					<ProductCard
						title={product.title}
						image={product.image}
						price={product.price}
						id={product.id}
						category={product.category}
					/>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		products:state.products.products
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchProducts:()=>dispatch(fetchProducts())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
