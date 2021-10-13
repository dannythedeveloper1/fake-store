import React from "react";
import {connect } from "react-redux";
import { Button } from "../../Component/Styles/Styles";
import { addProduct, removeProduct } from "../../redux";
import {
	CheckoutCategory,
	CheckoutContainer,
	CheckoutImg,
	CheckoutQuantity,
	CheckoutTitle,
	ItemDetails,
	Span,
} from "./CheckoutCardStyles";

const CheckoutCard = (props) => {
	const similarItems = props.items.filter((item) => item.id === props.id);

	const handleClick = () => {
		const newItems = props.items.filter((item) => item.id !== props.id);
		props.removeProduct(newItems);
	};

	const addItem = () => {
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

	const removeItem = () => {
		const index = props.items.findIndex((item) => item.id === props.id);
		let newItems = [...props.items];
		if (index >= 0) {
			newItems.splice(index, 1);
			props.removeProduct(newItems);
		}
	};

	return (
		<CheckoutContainer>
			<ItemDetails>
				<CheckoutImg src={props.image} alt="" />
				<div>
					<CheckoutTitle>{props.title}</CheckoutTitle>
					<CheckoutCategory>{props.category}</CheckoutCategory>
					<CheckoutQuantity>
						<h4 style={{ margin: "0", marginRight: "10px" }}>Quantity</h4>
						<Span onClick={removeItem}>-</Span>
						<Span style={{ margin: "0 8px" }}>{similarItems.length}</Span>
						<Span onClick={addItem}>+</Span>
					</CheckoutQuantity>
				</div>
			</ItemDetails>
			<div>
				<h3>$ {props.price}</h3>
			</div>
			<Button bgColor="#3498db" onClick={handleClick}>
				Remove
			</Button>
		</CheckoutContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.cart.items,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addProduct: (parameter) => dispatch(addProduct(parameter)),
		removeProduct: (parameter) => dispatch(removeProduct(parameter)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCard);
