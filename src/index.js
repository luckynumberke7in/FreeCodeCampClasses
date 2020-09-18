import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import QuoteGen from "./components/QuoteGen";

ReactDOM.render(
	<React.StrictMode>
		<QuoteGen />
		<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
//
// If you want to run the app online, put back to unregister()
//
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
