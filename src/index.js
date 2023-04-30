import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/reducers";
// import { githubAction, store } from "./redux/reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
