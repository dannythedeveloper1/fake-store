import "./App.css";
import Nav from "./Component/Nav";
import { Container } from "./Component/Styles/Styles";
import Products from "./Pages/ProductsPage/Products";

function App() {
	return (
		<div>
			<Nav />
			<Container minHeight="90vh" bgColor="lightgray">
				<Products />
			</Container>
		</div>
	);
}

export default App;
