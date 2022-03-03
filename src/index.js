import React from "react";
import ReactDOM from "react-dom";
import {CardProvider} from "./Context/CardContext.js";

import App from "./App";

ReactDOM.render(
	<CardProvider>
		<App />
	</CardProvider>,

	document.getElementById("root")
);
