import { connect } from "react-redux";
import ProductCard from "../ProductsPage/ProductCard";

const SearchPage = (props) => {
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
		products: state.products.products,
	};
};

export default connect(mapStateToProps, null)(SearchPage);
