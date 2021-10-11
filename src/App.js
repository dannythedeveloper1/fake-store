import { Provider } from "react-redux";
import "./App.css";
import Nav from "./Component/Nav";
import { Container } from "./Component/Styles/Styles";
import Products from "./Pages/ProductsPage/Products";
import store from "./redux/store";
import {Switch, Route } from "react-router-dom";
import Checkout from "./Pages/CheckoutPage/Checkout";

function App() {
	return (
		<Provider store={store}>
			<div>
				<Nav />
				<Container minHeight="90vh" bgColor="lightgray">
					<Switch>
						<Route exact path="/">
							<Products />
						</Route>
						<Route path="/checkout">
							<Checkout />
						</Route>
					</Switch>
				</Container>
			</div>
		</Provider>
	);
}

export default App;
