import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {CardProvider} from "./CardContext";
import {ThemeProvider} from "./ThemeContext";
import {LanguageProvider} from "./LanguageContext";
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<CardProvider>
					<App />
				</CardProvider>
			</LanguageProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
