import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Input } from "./Styles/Styles";
import SearchIcon from "@material-ui/icons/Search";
import { ProductContext } from "../context/ProductContext";
import { filteredProducts } from "../utils/utils";
const Search = () => {
	const [products, setProducts] = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState("");
    const searchValue = useRef(null);
	useEffect(() => {
		(async () => {
			const newProducts = await filteredProducts(searchTerm);
			console.log(newProducts);
			if (newProducts) {
				setProducts(newProducts);
			}
		})();

		// then(res=>setProducts(res))
	}, [searchTerm]);

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

export default Search;
