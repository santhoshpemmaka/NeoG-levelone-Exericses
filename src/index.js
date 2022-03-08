import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {CardProvider} from "./CardContext";

ReactDOM.render(
	<React.StrictMode>
		<CardProvider>
			<App />
		</CardProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
