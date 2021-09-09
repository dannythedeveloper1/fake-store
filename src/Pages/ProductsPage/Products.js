import React, { useEffect, useState } from "react";
import { Title } from "../../Component/Styles/Styles";
import ProductCard from "./ProductCard";

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => setProducts(json));
    }, []);
    
    const styles = {
        display: "flex",
        flexWrap: "wrap",
        // margin:"10px"
    }

	return (
        <div style={styles}>            
			{products.map((product) => (
                <div key={product.id}>
                    <ProductCard
                        title={product.title}
                        image={product.image}
                        price={product.price}
                    />
				</div>
			))}
			<Title size="xx-large" color="red">this is products</Title>
		</div>
	);
};

export default Products;
