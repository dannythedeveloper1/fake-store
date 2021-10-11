import React from "react";
import Search from "./Search";
import { Container, Title } from "./Styles/Styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Nav = () => {
	const items = useSelector((state) => state.cart.items);
	return (
		<Container
			height="10vh"
			bgColor="black"
			display="flex"
			alItm="center"
			jstCnt="space-around"
			position="sticky"
			top="0"
		>
			<Link to="/" style={{textDecoration:"none"}}>
				<Title color="white" margin="0" size="xx-large">
					Fake Store
				</Title>
			</Link>
			<Search />
			<Container display="flex" alItm="center">
				<Link to="/checkout" style={{display:"flex", alignItems:"center", textDecoration:"none"}}>
					<ShoppingCartOutlinedIcon style={{ color: "white" }} />
					<Title color="white" size="x-large" margin="0 0 0 10px">
						{items.length}
					</Title>
				</Link>
			</Container>
		</Container>
	);
};

export default Nav;
