import React, { useEffect, useRef, useState } from "react";
import { Container, Input } from "./Styles/Styles";
import SearchIcon from "@material-ui/icons/Search";
import { searchProducts } from "../redux";
import { connect } from "react-redux";
import { useHistory } from "react-router";
const Search = (props) => {
	const history = useHistory();
	const [searchTerm, setSearchTerm] = useState("");
	const searchValue = useRef(null);

	useEffect(() => {
		props.searchProducts(searchTerm);
	}, [searchTerm]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(searchValue.current.value);
		history.push("./search");
	};
	return (
		<Container
			bgColor="white"
			width="400px"
			height="40px"
			radius="15px"
			display="flex"
			jstCnt="space-around"
			alItm="center"
		>
			<form onSubmit={handleSubmit}>
				<Input ref={searchValue} />
				<SearchIcon />
			</form>
		</Container>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchProducts:(parameter)=>dispatch(searchProducts(parameter)),
	}
}

export default connect(null,mapDispatchToProps)(Search);
