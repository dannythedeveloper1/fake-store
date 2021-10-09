import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../Component/Styles/Styles";
import { addProduct, addQuantity, removeProduct } from "../../redux";
import {
	CheckoutCategory,
	CheckoutContainer,
	CheckoutImg,
	CheckoutQuantity,
	CheckoutTitle,
	ItemDetails,
	Span,
} from "./CheckoutCardStyles";

const CheckoutCard = ({ title, image, price, id, category }) => {
	const items = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const similarItems = items.filter((item) => item.id == id);

	const handleClick = () => {
		const newItems = items.filter((item) => item.id !== id);
		dispatch(removeProduct(newItems));
	};

	const addItem = () => {
		const singleItem = {
			title: title,
			image: image,
			price: price,
			id: id,
			category: category,
		};
		const newItems = [...items, singleItem];
		dispatch(addProduct(newItems));
	};

	const removeItem = () => {
		const index = items.findIndex((item) => item.id === id);
		let newItems = [...items];
		if (index >= 0) {
            newItems.splice(index, 1);
		dispatch(removeProduct(newItems));
		}
	};

	return (
		<CheckoutContainer>
			<ItemDetails>
				<CheckoutImg src={image} alt="" />
				<div>
					<CheckoutTitle>{title}</CheckoutTitle>
					<CheckoutCategory>{category}</CheckoutCategory>
					<CheckoutQuantity>
						<h4 style={{ margin: "0", marginRight: "10px" }}>Quantity</h4>
						<Span onClick={removeItem}>-</Span>
						<Span style={{ margin: "0 8px" }}>{similarItems.length}</Span>
						<Span onClick={addItem}>+</Span>
					</CheckoutQuantity>
				</div>
			</ItemDetails>
			<div>
				<h3>${price}</h3>
			</div>
			<Button bgColor="#3498db" onClick={handleClick}>
				Remove
			</Button>
		</CheckoutContainer>
	);
};

export default CheckoutCard;
