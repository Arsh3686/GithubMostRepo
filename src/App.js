import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./components/Home";
// import { plainCallApi } from "./plainredux/actions";
import { githubAction } from "./redux/reducers";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);
	console.log("selector in app.js", selector);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
				flexDirection: "column",
				backgroundColor: "rebeccapurple",
			}}>
			<Home />
		</div>
	);
}

export default App;
