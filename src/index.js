import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {makeServer} from "./server";
import Mockman from "mockman-js";
// Call make Server
makeServer();
ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<Mockman />
	</React.StrictMode>,
	document.getElementById("root")
);
