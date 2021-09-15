import React from "react";
import { Container, Input } from "./Styles/Styles";
import SearchIcon from "@material-ui/icons/Search";
const Search = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
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
				<Input />
				<SearchIcon />
			</form>
		</Container>
	);
};

export default Search;
