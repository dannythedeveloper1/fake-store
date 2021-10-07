import React, { useEffect, useRef, useState } from "react";
import { Container, Input } from "./Styles/Styles";
import SearchIcon from "@material-ui/icons/Search";
import { searchProducts } from "../redux";
import {  useDispatch} from "react-redux";
const Search = () => {
	const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const searchValue = useRef(null);


	useEffect(() => {
		dispatch(searchProducts(searchTerm));
	}, [searchTerm])


	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(searchValue.current.value);
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
				<Input
					ref={searchValue}
				/>
				<SearchIcon />
			</form>
		</Container>
	);
};



export default (Search);
