import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { ProductProvider } from "./context/ProductContext";

ReactDOM.render(
	<React.StrictMode>
		{/* <ProductProvider> */}
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
		{/* </ProductProvider> */}
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
