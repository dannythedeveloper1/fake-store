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
			<Title size="large" weight="700" txtAlign=
			"center">
				${price}
			</Title>
			<Button bgColor="#3498db">Add to Cart</Button>
		</Container>
	);
};

export default ProductCard;
