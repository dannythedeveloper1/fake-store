import React from "react";
import Search from "./Search";
import { Container, Title } from "./Styles/Styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
const Nav = () => {
	return (
		<Container
			height="10vh"
			bgColor="black"
			display="flex"
			alItm="center"
			jstCnt="space-around"
		>
			<Title color="white" margin="0" size="xx-large">
				Fake Store
			</Title>
			<Search />
			<Container display="flex" alItm="center">
				<ShoppingCartOutlinedIcon style={{ color: "white" }} />
				<Title color="white" size="x-large" margin="0 0 0 10px">
					0
				</Title>
			</Container>
		</Container>
	);
};

export default Nav;
