import { Provider, useSelector } from "react-redux";
import "./App.css";
import Nav from "./Component/Nav";
import { Container, LoadingContainer } from "./Component/Styles/Styles";
import Products from "./Pages/ProductsPage/Products";
import store from "./redux/store";
import { Switch, Route, useHistory } from "react-router-dom";
import Checkout from "./Pages/CheckoutPage/Checkout";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Login from "./Pages/LoginPage/Login";
import { useEffect, useState } from "react";
import Register from "./Pages/RegisterPage/Register";
import Loader from "react-loader-spinner";

function App() {
	const history = useHistory();
	const loading = useSelector((state) => state.products.loading);
	const [auth, setAuth] = useState(false);
	useEffect(() => {
		history.push("/login");
	}, []);
	return (
		// <Provider store={store}>
		<div>
			{!auth ? (
				<Switch>
					<Route path="/login">
						<Login setAuth={setAuth} />
					</Route>
					<Route path="/register">
						<Register setAuth={setAuth} />
					</Route>
				</Switch>
			) : (
				<>
					<Nav setAuth={setAuth} />
					<LoadingContainer loading={loading}>
						<Loader
							type="Bars"
							color="#00BFFF"
							height={100}
							width={100}
						/>
					</LoadingContainer>
					<Container minHeight="90vh" bgColor="lightgray">
						<Switch>
							<Route exact path="/">
								<Products />
							</Route>
							<Route exact path="/search">
								<SearchPage />
							</Route>
							<Route path="/checkout">
								<Checkout />
							</Route>
						</Switch>
					</Container>
				</>
			)}
		</div>
		// </Provider>
	);
}

export default App;
