import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../../Component/Styles/Styles";
import CheckoutCard from "./CheckoutCard";
const Checkout = () => {
	const items = useSelector((state) => state.cart.items);

	const key = "id";
	const uniqueItems = [
		...new Map(items.map((item) => [item[key], item])).values(),
	];


	const styles = {
		display: "flex",
		flexDirection: "column",
		alignContent: "center",
		flexWrap: "wrap",
		mainContainer: {
			display: "flex",
			justifyContent: "space-around",
		},
		TotalContainer: {
			width: "400px",
			height: "400px",
			backgroundColor: "white",
			borderRadius: "15px",
			marginTop: "10px",
			top: "12vh",
			position: "sticky",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		TotalDetails: {
			width: "320px",
			display: "flex",
			justifyContent: "space-between",
		},
	};
	return (
		<div style={styles.mainContainer}>
			<div style={styles}>
				{uniqueItems.map((item) => (
					<div style={{ margin: "10px" }} key={item.id}>
						<CheckoutCard
							title={item.title}
							image={item.image}
							price={item.price}
							id={item.id}
							category={item.category}
						/>
					</div>
				))}
			</div>
			<div style={styles.TotalContainer}>
				<h1>Order Summary</h1>
				<div style={styles.TotalDetails}>
					<div>
						<h3>subTotal:</h3>
						<p>Tax:</p>
						<p>Shipping:</p>
						<h1>Total</h1>
					</div>
					<div>
						<h3>$100</h3>
						<p>$100</p>
						<p>$100</p>
						<h1>$300</h1>
					</div>
				</div>
				<Button
					bgColor="#3498db"
					style={{ fontSize: "25px", padding: "10px 20px" }}
				>
					Checkout
				</Button>
			</div>
		</div>
	);
};

export default Checkout;
