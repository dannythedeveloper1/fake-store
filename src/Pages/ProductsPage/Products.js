import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
// const data= require( "../../products.json");

const Products = () => {
    const [products, setProducts] = useContext(ProductContext);
    console.log(products);
	// const [products, setProducts] = useState([]);
	// useEffect(() => {
	// 	fetch("./products.json")
	// 		.then((res) => res.json())
	// 		.then((json) => setProducts(json));
    // }, []);
    
    const styles = {
        display: "flex",
        justifyContent:"center",
        flexWrap: "wrap"
    }

	return (
        <div style={styles}>            
			{products.map((product) => (
                <div style={{margin:"10px"}} key={product.id}>
                    <ProductCard
                        title={product.title}
                        image={product.image}
                        price={product.price}
                    />
				</div>
			))}
		</div>
	);
};

export default Products;
