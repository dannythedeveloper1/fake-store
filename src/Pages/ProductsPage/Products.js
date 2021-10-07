import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux";
// import { ProductContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
// const data= require( "../../products.json");

const Products = (props) => {
    // const [products, setProducts] = useContext(ProductContext);
    // console.log(products);
	// const [products, setProducts] = useState([]);
	// useEffect(() => {
	// 	fetch("./products.json")
	// 		.then((res) => res.json())
	// 		.then((json) => setProducts(json));
    // }, []);

    useEffect(() => {
        props.fetchProducts();
    }, [])
    
    const styles = {
        display: "flex",
        justifyContent:"center",
        flexWrap: "wrap"
    }

	return (
        <div style={styles}>            
			{props.products.map((product) => (
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

const mapStateToProps = (state) => {
    console.log(state.products)
    return {
        products:state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts:()=>dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
