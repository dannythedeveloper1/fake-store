import React from "react";
import {
    Button,
	Container,
	Img,
	Title,
} from "../../Component/Styles/Styles";

const ProductCard = ({ title, image, price }) => {
	return (
		<Container
			bdr="1px solid black"
			radius="15px"
			bgColor="lightgray"
			width="250px"
			height="350px"
			pad="45px"
			display="flex"
			direction="column"
			alItm="center"
		>
			<Title size="medium" weight="800">
				{title}
			</Title>
			<div style={{ width: "150px", height: "150px" }}>
				<Img src={image} />
			</div>
			<Title size="large" weight="700">
				${price}
			</Title>
			<Button bgColor="#3498db">Add to Cart</Button>
		</Container>
	);
};

export default ProductCard;
