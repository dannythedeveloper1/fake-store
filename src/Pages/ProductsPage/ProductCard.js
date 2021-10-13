import { connect} from "react-redux";
import { Button, Container, Img, Title } from "../../Component/Styles/Styles";
import { addProduct } from "../../redux";

const ProductCard = (props) => {
	const handleClick = () => {
		const singleItem = {
			title: props.title,
			image: props.image,
			price: props.price,
			id: props.id,
			category: props.category,
		};
		const newItems = [...props.items, singleItem];
		props.addProduct(newItems);
	};

	return (
		<Container
			radius="15px"
			bgColor="white"
			width="250px"
			height="350px"
			pad="45px"
			display="flex"
			direction="column"
			alItm="center"
		>
			<Title size="medium" weight="800" width="200px">
				{props.title}
			</Title>
			<div style={{ width: "150px", height: "150px" }}>
				<Img src={props.image} />
			</div>
			<Title size="large" weight="700" txtAlign="center">
				$ {props.price}
			</Title>
			<Button bgColor="#3498db" onClick={handleClick}>
				Add to Cart
			</Button>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.cart.items,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addProduct: (e) => dispatch(addProduct(e)),
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);
