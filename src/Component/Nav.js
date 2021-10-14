import React from "react";
import Search from "./Search";
import { Container, Title } from "./Styles/Styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { MdLogout } from 'react-icons/md';
import { useSelector } from "react-redux";
import { Link,useHistory } from "react-router-dom";
const Nav = ({ setAuth }) => {
	const items = useSelector((state) => state.cart.items);
	const history = useHistory();
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
			<Link to="/" style={{ textDecoration: "none" }}>
				<Title color="white" margin="0" size="xx-large">
					Fake Store
				</Title>
			</Link>
			<Search />

			<Container display="flex" alItm="center">
				<MdLogout
					color="white"
					size="30px"
					style={{ marginRight: "155px" }}
					onClick={() => {
						setAuth(false)
						history.push("/login");
					}}
				/>
				<Link
					to="/checkout"
					style={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
					}}
				>
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
