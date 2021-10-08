import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../Component/Styles/Styles";
import { removeProduct } from "../../redux";
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
	const handleClick = () => {
        const newItems = items.filter(item => item.id !== id);
        dispatch(removeProduct(newItems));
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
						<Span>-</Span>
						<Span style={{ margin: "0 8px" }}>1</Span>
						<Span>+</Span>
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
