import "./App.css";
import Nav from "./Component/Styles/Nav";
import { Container } from "./Component/Styles/Styles";
import Products from "./Pages/ProductsPage/Products";

function App() {
	return (
    <div className="App">
      <Nav/>
			<Container height="90vh">
				<Products />
			</Container>
		</div>
	);
}

export default App;
