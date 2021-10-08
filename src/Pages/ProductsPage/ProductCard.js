import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button, Container, Img, Title } from "../../Component/Styles/Styles";
import { addProduct } from "../../redux";

const ProductCard = ({ title, image, price, id, category }) => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);
	const quantity = useSelector((state) => state.cart.quantity);

	const handleClick = () => {
		const singleItem = {
			title: title,
			image: image,
			price: price,
			id: id,
			category: category,
		};
		const itemsId = items.map((item) => item.id);
		if (itemsId.includes(id)) {
			dispatch(addProduct(null));
		} else {
			const newItems = [...items, singleItem];
			dispatch(addProduct(newItems));
		}
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
				{title}
			</Title>
			<div style={{ width: "150px", height: "150px" }}>
				<Img src={image} />
			</div>
			<Title size="large" weight="700" txtAlign="center">
				${price}
			</Title>
			<Button bgColor="#3498db" onClick={handleClick}>
				Add to Cart
			</Button>
		</Container>
	);
};

export default ProductCard;
