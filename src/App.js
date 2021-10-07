import { Provider } from "react-redux";
import "./App.css";
import Nav from "./Component/Nav";
import { Container } from "./Component/Styles/Styles";
import Products from "./Pages/ProductsPage/Products";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div>
				<Nav />
				<Container minHeight="90vh" bgColor="lightgray">
					<Products />
				</Container>
			</div>
		</Provider>
	);
}

export default App;
